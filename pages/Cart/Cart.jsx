import React from 'react';
import {
  Container,
  Card,
  Button,
} from '@catho/quantum';
import { connect } from 'react-redux';
import { priceFormat } from 'shared';
import ShopCart from 'components/ShopCart';
import { getCartFromCookie } from 'components/ShopCart/actions';

import StyledWrapper from './styles';

class Cart extends React.Component {
  componentDidMount() {
    const {
      getCart,
    } = this.props;
    getCart();
  }

  render() {
    const { cartItemsProps } = this.props;
    const amount = Array.isArray(cartItemsProps.items)
      ? cartItemsProps.items.map(cartItem => cartItem.price).reduce((a, b) => a + b, 0)
      : 0;

    return (
      <StyledWrapper>
        <Container no-gutters withBreakpoints>
          <Card.Header>
            <Card.HeaderText>
              <Card.Title>Carrinho</Card.Title>
              <Card.Description>Confira os items que você está comprando:</Card.Description>
            </Card.HeaderText>
          </Card.Header>
          <ShopCart />
          <Card>
            <Card.Header>
              <Card.HeaderText>
                <Card.Title>
                  {`Total: ${priceFormat(amount)}`}
                </Card.Title>
              </Card.HeaderText>
            </Card.Header>
            <Card.Content>
              <Button icon="attach_money">Finalizar a compra</Button>
            </Card.Content>
          </Card>
        </Container>
      </StyledWrapper>
    );
  }
}

export const mapStateToProps = state => ({ cartItemsProps: state.shopCartReducer });

const mapDispatchToProps = dispatch => ({
  getCart: item => dispatch(getCartFromCookie(item)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cart);
