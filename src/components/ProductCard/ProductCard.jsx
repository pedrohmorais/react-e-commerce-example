import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  Button,
} from '@catho/quantum';

import {
  PriceBlock,
  ImgContainer,
} from './styles';

const ProductCard = ({ name, slug, imgUrl, formatedPrice }) => (
  <Card>
    <Card.Header>
      <Card.HeaderText>
        <Card.Title small>{name}</Card.Title>        
      </Card.HeaderText>
    </Card.Header>
    <PriceBlock>
      {formatedPrice}
    </PriceBlock>
    <ImgContainer src={imgUrl} alt={slug} />
    <Card.Footer
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <div>
        <Button size="small" skin="secondary">
          Ver detalhes
        </Button>
      </div>
      <div>
        <Button size="small" skin="primary" icon="shopping_cart">
          Adicionar ao carrinho
        </Button>
      </div>
    </Card.Footer>
  </Card>
);

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  formatedPrice: PropTypes.string.isRequired,
}

export default ProductCard;