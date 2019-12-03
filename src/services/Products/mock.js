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
  {
    id: 3,
    name: 'Shotgun M870 Cm.352 Spring - Cyma',
    price: 899.90,
    variation: 'black',
    description: 'Shotgun de Airsoft Cyma. Uma espingarda de Airsoft que imita as shotguns policiais americanas. Possui construção em polímero de alta densidade com algumas partes de metal no interior. Contém zarelho para bandoleira, engatilhamento spring do tipo pump e magazine do tipo cartucho para 30 esferas sendo 3 esferas disparadas por vez. Velocidade inicial 220 fps com munição 0.20g. Acompanha BB loader.',
    recipient_id: 1,
  },
  {
    id: 4,
    name: 'Metralhadora Giratória M132 Microgun',
    price: 11500,
    variation: 'black',
    description: 'A Metralhadora M132 Microgun é uma arma giratória funcional! Construída em polímero para um peso ideal para jogos. Compacta, resistente e durável! Com capacidade de até 2200bbs carregadas por mola, dispara em torno de 38 bbs por segundo. O sistema giratório dos canos é alimentado por bateria, é recomendado que se utilize baterias 11.1v. Alimentação com Green gás ou cilindro HPA.',
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