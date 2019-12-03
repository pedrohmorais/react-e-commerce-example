import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Card,
  Button,
} from '@catho/quantum';

import ErrorPage from '../ErrorPage';

import {
  PriceBlock,
  ImgContainer,
  DescriptionBlock,
  CTAButtonContainer,
} from './styles';

import ProductsService from '../../services/Products';

const Product = ({
  match,
}) => {
  const { productSlug } = match.params;

  const product = ProductsService.getBySlug(productSlug);

  if(!product) {
    return <ErrorPage />
  }

  const { name, slug, imgUrl, formatedPrice, description } = product;

  return (
    <div>
      <Container no-gutters withBreakpoints>
        <Card>
          <ImgContainer src={imgUrl} alt={slug} />
          <Card.Header>
            <Card.HeaderText>
              <Card.Title small>{name}</Card.Title>        
            </Card.HeaderText>
          </Card.Header>
          <PriceBlock>
            {formatedPrice}
          </PriceBlock>
          <Card.Content>
            <CTAButtonContainer>
              <Button as="a" href="/carrinho" size="small" skin="primary" icon="shopping_cart" full>
                COMPRAR
              </Button>
            </CTAButtonContainer>
          </Card.Content>
        </Card>
        <br />
        <Card>
          <Card.Header>
            <Card.HeaderText>
              <Card.Title small>Descrição:</Card.Title>        
            </Card.HeaderText>
          </Card.Header>
          <DescriptionBlock>
            {description}
          </DescriptionBlock>
        </Card>
      </Container>
    </div>
  );
}

Product.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
}


export default Product;
