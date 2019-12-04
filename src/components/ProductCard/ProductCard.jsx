import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  Button,
} from '@catho/quantum';

import {
  PriceBlock,
  ImgContainer,
  StyledFooter,
  CTAButton,
  CTAButtonContainer,
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
    <StyledFooter>
      <CTAButtonContainer>
        <Button as="a" href={`/produto/${slug}`} size="small" skin="secondary">
          Ver detalhes
        </Button>
      </CTAButtonContainer>
      <div>
        <CTAButton size="small" skin="primary" icon="shopping_cart">
          Adicionar ao carrinho
        </CTAButton>
      </div>
    </StyledFooter>
  </Card>
);

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  formatedPrice: PropTypes.string.isRequired,
}

export default ProductCard;