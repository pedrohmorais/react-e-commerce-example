import React from 'react';
import {
  Container,
  Card,
} from '@catho/quantum';

import ProductsService from 'services/Products';
import ProductsList from 'components/ProductsList';
import StyledWrapper from './styles';

const Home = () => {
  const products = ProductsService.getAll();

  return (
    <StyledWrapper>
      <Container no-gutters withBreakpoints>
        <Card>
          <Card.HeaderText>
            <Card.Title small>Airsoft Community - venda de airsofts.</Card.Title>        
          </Card.HeaderText>
          <Card.Content>
            Todos os nossos produtos possuem nota fiscal no nome do comprador.
            Não vendemos armas de fogo,
            todos os produtos possuem ponta laranja e são destinados ao uso desportivo de airsoft.
          </Card.Content>
        </Card>
        <ProductsList products={products} />
      </Container>
    </StyledWrapper>
  );
};


export default Home;
