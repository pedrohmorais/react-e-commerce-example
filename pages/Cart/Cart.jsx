import React from 'react';
import {
  Container,
  Card,
  Button,
} from '@catho/quantum';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { priceFormat } from 'shared';
import ShopCart from 'components/ShopCart';
import { getCartFromCookie } from 'components/ShopCart/actions';

import StyledWrapper from './styles';
import Skeleton from './skeleton';

class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  componentWillMount() {
    const {
      getCart,
    } = this.props;
    getCart();
  }

  componentDidMount() {
    this.setState({ loading: false });
  }

  render() {
    const { cartItemsProps } = this.props;
    const { loading } = this.state;
    const amount = Array.isArray(cartItemsProps.items)
      ? cartItemsProps.items.map(cartItem => cartItem.price).reduce((a, b) => a + b, 0)
      : 0;
    const isEmptyCart = amount === 0;

    const loadedCart = (
      <>
        <Card.Header>
          <Card.HeaderText>
            {isEmptyCart && (
              <Card>
                <Card.Header>
                  <Card.Title>Seu carrinho está vazio!</Card.Title>
                </Card.Header>
                <Card.Content>
                  <Button $as="a" href="/" skin="success" icon="shopping_cart">Clique aqui e encontre o produto perfeito pra você!</Button>
                </Card.Content>
              </Card>
            )}
            {!isEmptyCart && (
              <>
                <Card.Title>Carrinho</Card.Title>
                <Card.Description>Confira os items que você está comprando:</Card.Description>
              </>
            )}
          </Card.HeaderText>
        </Card.Header>
        {!isEmptyCart && (
          <>
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
                <Button $as="a" href="/checkout" skin="success" icon="attach_money">Finalizar a compra</Button>
              </Card.Content>
            </Card>
          </>
        )}
      </>
    );

    return (
      <StyledWrapper>
        <Container no-gutters withBreakpoints>
          {loading && (
            <Skeleton />
          )}
          {!loading && (
            loadedCart
          )}
        </Container>
      </StyledWrapper>
    );
  }
}

Cart.defaultProps = {
  cartItemsProps: [],
};

Cart.propTypes = {
  getCart: PropTypes.func.isRequired,
  cartItemsProps: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        formatedPrice: PropTypes.string,
        imgUrl: PropTypes.string,
        slug: PropTypes.string,
      }),
    ),
  }),
};

export const mapStateToProps = state => ({ cartItemsProps: state.shopCartReducer });

const mapDispatchToProps = dispatch => ({
  getCart: item => dispatch(getCartFromCookie(item)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cart);
