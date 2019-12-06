import React from 'react';
import {
  Container,
  Card,
} from '@catho/quantum';

import ShopCart from 'components/ShopCart';
import ShopCartService from '../../src/services/ShopCart';
import StyledWrapper from './styles';

const Cart = () => {
  const cartItems = ShopCartService.getShopCart().items;

  return (
    <StyledWrapper>
      <Container no-gutters withBreakpoints>
        <Card.Header>
          <Card.HeaderText>
            <Card.Title>Carrinho</Card.Title>
            <Card.Description>Lorem ipsum dolor sit amet.</Card.Description>
          </Card.HeaderText>
        </Card.Header>
        <ShopCart />
      </Container>
    </StyledWrapper>
  );
};


export default Cart;
