/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  func,
} from 'prop-types';
import {
  Card,
} from '@catho/quantum';
import { resetFilters, addToChart } from './actions';
import constants from '../../constants';
import {
  ShopCartWrapper,
  ShopCartItems,
  ShopCartItem,
} from './styles';

const defaultProps = {
};

const propTypes = {
  addToChartAction: func.isRequired,
};

const fieldTypes = constants.FIELD_TYPES;

class ShopCart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
    };

    this.props = props;
    // this.updateMountedFilter = this.updateMountedFilter.bind(this);
    // this.toggleFilter = this.toggleFilter.bind(this);

    // this.selectCidadeRef = React.createRef();
  }

  // componentDidMount() {
  //   this.props.resetFilters();
  // }

  render() {
    const { addToChartAction } = this.props;
    const addItem = () => addToChartAction({
      nome: 'm92aa',
    });
    return (
      <ShopCartWrapper>
        items        
      </ShopCartWrapper>
    );
  }
}

ShopCart.defaultProps = defaultProps;
ShopCart.propTypes = propTypes;

const mapDispatchToProps = dispatch => ({
  resetFilters: () => dispatch(resetFilters()),
  addToChartAction: filters => dispatch(addToChart(filters)),
});
export default connect(
  null,
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