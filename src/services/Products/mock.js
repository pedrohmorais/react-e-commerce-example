import slug from 'slug';
import { priceFormat } from '../../shared';

const mountImgUrl = (recipientId, imgName, format = 'jpg') => `/assets/products/r-${recipientId}/${imgName}.${format}`;

const productsMock = [
  {
    id: 1,
    name: 'M92 WE Silver Edition',
    price: 999.99,
    variation: 'Silver',
    description: 'A Pistola M92 Cromada é uma Airsoft produzida pela WE. Seu funcionamento é através de Green Gás e utiliza como munição Esferas plásticas: BBS. É denominada Full Metal por possuir a maior parte do corpo confeccionado em metal.',
    recipient_id: 1,
  },
  {
    id: 2,
    name: 'Ares Amoeba Octarms M4 Km13',
    price: 2500,
    variation: 'black',
    description: 'Assim como suas irmãs de outros tamanhos, o rifle de airsoft Ares Octarms M4 KM13 é uma arma premium. Ele possui um acabamento bastante acima da média de mercado e é considerado por muitos a de melhor acabamento externo entre todas as M4 de airsoft. Um verdadeiro objeto de desejo para todos os jogadores.',
    recipient_id: 1,
  },
]

const mountedMock = (product) => {
  const newProduct = product;
  const {
    name,
    recipient_id: recipientId,
    price,
  } = product;
  newProduct.slug = slug(name, {lower: true});
  newProduct.imgUrl = mountImgUrl(recipientId, newProduct.slug);
  newProduct.formatedPrice = priceFormat(price);
  return newProduct;
}

export default productsMock.map(p => mountedMock(p));