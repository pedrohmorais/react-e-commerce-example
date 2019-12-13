import React from 'react';
import {
  Container,
  Card,
  Button,
} from '@catho/quantum';
import customErrorComponent from 'services/customErrorComponent';
import { priceFormat } from 'shared';
import ShopCart from 'components/ShopCart';

import StyledWrapper from './styles';
import PagarMeService from '../../src/services/PagarMe';
import ShopCartService from '../../src/services/ShopCart';

class Checkout extends React.Component {
  static async getInitialProps(props) {
    const { req, res } = props;
    const shopCartService = new ShopCartService({ req, res });
    const cartItems = shopCartService.getShopCartSSR().items;
    const transaction = await PagarMeService.createTransaction(cartItems);
    console.log(transaction);
    if (!transaction) {
      return { withError: { statusCode: 404, message: 'Erro ao carregar carrinho!' } };
    }
    return {
      cartItems,
      amount: transaction.amount / 100,
    };
  }

  render() {
    const { withError, amount } = this.props;
    if (withError) {
      return customErrorComponent(withError);
    }
    return (
      <StyledWrapper>
        <Container no-gutters withBreakpoints>
          <Card.Header>
            <Card.HeaderText>
              <Card.Title>Compra efetuada com sucesso!</Card.Title>
              <Card.Description>Confira os items que você comprou:</Card.Description>
            </Card.HeaderText>
          </Card.Header>
          <ShopCart isResume />
          <Card.Header>
            <Card.HeaderText>
              <Card.Title>
                {`Total: ${priceFormat(amount)}`}
              </Card.Title>
            </Card.HeaderText>
          </Card.Header>
        </Container>
      </StyledWrapper>
    );
  }
}

export default Checkout;
