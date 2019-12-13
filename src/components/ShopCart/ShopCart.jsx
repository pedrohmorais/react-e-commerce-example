/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ShopCartService from 'services/ShopCart';
import {
  Card,
  Icon,
} from '@catho/quantum';
import skeleton from './skeleton';
import { getCartFromCookie, removeFromCart } from './actions';
import {
  CancelWrapper,
  ShopCartWrapper,
  ShopCartItems,
  ShopCartItem,
  ThumbImage,
} from './styles';

const defaultProps = {
  isResume: false,
  cartItemsProps: [],
};

const propTypes = {
  isResume: PropTypes.bool,
  removeCartItem: PropTypes.func.isRequired,
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

class ShopCart extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const {
      getCart,
      isResume,
    } = this.props;
    getCart();
    if (isResume) {
      ShopCartService.clearShopCart();
    }
  }


  handleClick(id) {
    const { removeCartItem } = this.props;
    removeCartItem(id);
  }

  renderCartItem(item) {
    const {
      id,
      name,
      formatedPrice,
      imgUrl,
      slug,
    } = item;
    const { isResume } = this.props;

    return (
      <ShopCartItem key={id}>
        <Card>
          <Card.Header>
            <ThumbImage>
              <img src={imgUrl} alt={slug} />
            </ThumbImage>
            <Card.HeaderText>
              <Card.Title small>{name}</Card.Title>
              <Card.Description>{formatedPrice}</Card.Description>
            </Card.HeaderText>
            {!isResume && (
              <CancelWrapper title="Remover item do carrinho" type="button" onClick={() => this.handleClick(id)}>
                <Icon name="cancel" />
              </CancelWrapper>
            )}
          </Card.Header>
        </Card>
      </ShopCartItem>
    );
  }

  render() {
    const { cartItemsProps } = this.props;

    return (
      <ShopCartWrapper>
        <ShopCartItems>
          {cartItemsProps.items.map(cartItem => this.renderCartItem(cartItem))}
        </ShopCartItems>
      </ShopCartWrapper>
    );
  }
}

ShopCart.defaultProps = defaultProps;
ShopCart.propTypes = propTypes;
ShopCart.Skeleton = skeleton;

export const mapStateToProps = state => ({ cartItemsProps: state.shopCartReducer });

const mapDispatchToProps = dispatch => ({
  removeCartItem: itemId => dispatch(removeFromCart(itemId)),
  getCart: item => dispatch(getCartFromCookie(item)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ShopCart);
