/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Card,
  Icon,
} from '@catho/quantum';
import { getCartFromCookie, removeFromCart } from './actions';
import {
  CancelWrapper,
  ShopCartWrapper,
  ShopCartItems,
  ShopCartItem,
  ThumbImage,
} from './styles';

const defaultProps = {
};

const propTypes = {
  removeCartItem: PropTypes.func.isRequired,
  getCart: PropTypes.func.isRequired,
  cartItemsProps: PropTypes.object.isRequired,
};

class ShopCart extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const {
      getCart,
    } = this.props;
    getCart();
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
            <CancelWrapper title="Remover item do carrinho" type="button" onClick={() => this.handleClick(id)}>
              <Icon name="cancel" />
            </CancelWrapper>
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

export const mapStateToProps = state => ({ cartItemsProps: state.shopCartReducer });

const mapDispatchToProps = dispatch => ({
  removeCartItem: itemId => dispatch(removeFromCart(itemId)),
  getCart: item => dispatch(getCartFromCookie(item)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ShopCart);


/*
export const mapStateToProps = state => ({
  ...state.blogPostReducer,
});

export const mapDispatchToProps = dispatch => ({
  loadBlogPost: () => dispatch(fetchBlogPost()),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withJob({
    work: props => props.loadBlogPost(),
    LoadingComponent: () => <BlogAdSkeleton />,
  }),
)(BlogAd);
*/