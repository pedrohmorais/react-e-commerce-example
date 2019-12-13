import React from 'react';
import {
  Card,
  Skeleton,
} from '@catho/quantum';
import ShopCart from 'components/ShopCart';

export default () => (
  <>
    <Card.Header>
      <Card.HeaderText>
        <Card.Title>
          <Skeleton.Text width="140px" />
        </Card.Title>
        <Card.Description>
          <Skeleton.Text width="60%" />
        </Card.Description>
      </Card.HeaderText>
    </Card.Header>
    <ShopCart.Skeleton />
    <Card>
      <Card.Header>
        <Card.HeaderText>
          <Card.Title>
            <Skeleton.Text width="40%" />
          </Card.Title>
        </Card.HeaderText>
      </Card.Header>
      <Card.Content>
        <Skeleton.Button width="100%" />
      </Card.Content>
    </Card>
  </>
);
