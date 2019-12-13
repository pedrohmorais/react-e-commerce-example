import pagarme from 'pagarme';

const API_KEY = 'ak_test_v7wdLNggngJrhJB61a4HKPAMzZVidY';
const ENCRYPTION_KEY = 'ak_test_v7wdLNggngJrhJB61a4HKPAMzZVidY';
const sellerRID = 're_ck40nx8te08aqu56f37271gm0';
const reqOpts = { api_key: API_KEY };
const recipientMock = {
  anticipatable_volume_percentage: '85',
  api_key: API_KEY,
  automatic_anticipation_enabled: 'true',
  bank_account: {
    bank_code: '341',
    agencia: '0932',
    agencia_dv: '5',
    conta: '58054',
    type: 'conta_corrente',
    conta_dv: '1',
    document_number: '26268738888',
    legal_name: 'API BANK ACCOUNT',
  },
  transfer_day: '5',
  transfer_enabled: 'true',
  transfer_interval: 'weekly',
  postback_url: 'https://requestb.in/tl0092tl',
};
const mock = {
  api_key: API_KEY,
  payment_method: 'credit_card',
  card_holder_name: 'Anakin Skywalker',
  card_cvv: '123',
  card_number: '4242424242424242',
  card_expiration_date: '1220',
  customer: {
    external_id: '1',
    name: 'Nome do cliente',
    type: 'individual',
    country: 'br',
    documents: [
      {
        type: 'cpf',
        number: '00000000000',
      },
    ],
    phone_numbers: ['+551199999999'],
    email: 'cliente@email.com',
  },
  billing: {
    name: 'Nome do pagador',
    address: {
      country: 'br',
      street: 'Avenida Brigadeiro Faria Lima',
      street_number: '1811',
      state: 'sp',
      city: 'Sao Paulo',
      neighborhood: 'Jardim Paulistano',
      zipcode: '01451001',
    },
  },
  items: [],
  split_rules: [
    {
      //  id: 'sr_cj41w9m4d01ta316d02edaqav',
      percentage: '100',
      // liable sera o vendedor pq ele paga o imposto
      liable: true,
      recipient_id: sellerRID,
      charge_processing_fee: true,
    },
    // nao achei na doc qual recipient devo usar para o pagarme
  ],
};

export default class PagarMe {
  constructor() {
    this.transactions = null;
    this.card = null;
  }

  static translateRules(items) {
    return {
      ...mock,
      items: items.map(({
        id,
        name,
        price,
      }) => ({
        id: id.toString(),
        title: name,
        unit_price: price * 100,
        quantity: 1,
        tangible: true,
      })),
      amount: items.map(item => item.price).reduce((a, b) => a + b) * 100,
    };
  }

  static createRecipient() {
    pagarme.recipients.create(reqOpts, recipientMock)
      .then(result => result.id)
      .catch(result => console.log('Error', result.response.errors));
  }

  static getRecipients() {
    pagarme.recipients.all(reqOpts, reqOpts)
      .then(result => console.log(result))
      .catch(result => console.log('Error', result.response.errors));
  }

  static createTransaction(items = []) {
    const transactionMock = this.translateRules(items);
    return pagarme.transactions.create(reqOpts, transactionMock)
      .then((result) => {
        if (result.status === 'paid') {
          return result;
        }
        return false;
      })
      .catch(result => console.log('Error', result.response.errors));
  }

  getCustomerInfo() {
    return {
      transactions: this.transactions,
      card: this.card,
    };
  }

  connect() {
    pagarme.client.connect(reqOpts)
      .then(client => client.transactions.all())
      .then((transactions) => { this.transactions = transactions; });
  }

  static captureTransaction(tId) {
    console.log(pagarme.transactions.capture);
    pagarme.transactions.capture(reqOpts, { ...reqOpts, id: tId })
      .then(result => console.log('captured', result))
      .catch(result => console.log('#####', result.response.errors));
  }

  connectCustomerCard() {
    const card = {
      card_number: '4111111111111111',
      card_holder_name: 'abc',
      card_expiration_date: '1225',
      card_cvv: '123',
    };

    return pagarme.client.connect({ encryption_key: ENCRYPTION_KEY })
      .then(client => client.security.encrypt(card))
      .then((cardHash) => { this.card = cardHash; });
  }
}
