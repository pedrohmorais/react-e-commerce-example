import React from 'react';
import {
  Container,
} from '@catho/quantum';
import StyledWrapper from './styles';
import ProductsService from '../../services/Products';
import ProductsList from '../../components/ProductsList';

const Home = () => {

  const products = ProductsService.getAll();

  
  return (
    <StyledWrapper>
      <Container no-gutters withBreakpoints>
        <ProductsList products={products} />
      </Container>
    </StyledWrapper>
  );
}


export default Home;
