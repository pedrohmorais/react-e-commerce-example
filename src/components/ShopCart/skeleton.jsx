/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import {
  Card,
  Skeleton,
} from '@catho/quantum';
import {
  ShopCartWrapper,
  ShopCartItems,
  ShopCartItem,
  ThumbImage,
} from './styles';

export default () => {
  const renderCartItem = id => (
    <ShopCartItem key={id}>
      <Card>
        <Card.Header>
          <ThumbImage>
            <Skeleton type="rect" width="100%" height="100%" />
          </ThumbImage>
          <Card.HeaderText>
            <Card.Title small><Skeleton.Text width={`2${id}0px`} /></Card.Title>
            <Card.Description><Skeleton.Text width="100px" /></Card.Description>
          </Card.HeaderText>
        </Card.Header>
      </Card>
    </ShopCartItem>
  );

  return (
    <ShopCartWrapper>
      <ShopCartItems>
        {[1, 4, 2].map(cartItem => renderCartItem(cartItem))}
      </ShopCartItems>
    </ShopCartWrapper>
  );
};
