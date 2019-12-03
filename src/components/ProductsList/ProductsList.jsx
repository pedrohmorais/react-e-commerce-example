import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../ProductCard';

import {
  StyledProductList,
  StyledListItems,
} from './styles';

const renderProductCard = (product) => {
  const { name, slug, imgUrl, formatedPrice } = product;
  
  return (
    <StyledListItems>
      <ProductCard
        name={name}
        slug={slug}
        imgUrl={imgUrl}
        formatedPrice={formatedPrice} 
      />
    </StyledListItems>
  );
}

const ProductsList = ({
  products,
}) => {

  return (
    <StyledProductList>
      {products.map(p => renderProductCard(p))}
    </StyledProductList>
  );
}

ProductsList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.any).isRequired,
}

export default ProductsList;