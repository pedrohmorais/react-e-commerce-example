import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../ProductCard';

import {
  StyledProductList,
  StyledListItems,
} from './styles';

const renderProductCard = (product) => {
  const {
    name,
    slug,
    imgUrl,
    formatedPrice,
    id,
    price,
  } = product;

  return (
    <StyledListItems key={slug}>
      <ProductCard
        id={id}
        name={name}
        slug={slug}
        imgUrl={imgUrl}
        formatedPrice={formatedPrice}
        price={price}
      />
    </StyledListItems>
  );
};

const ProductsList = ({
  products,
}) => (
  <StyledProductList>
    {products.map(p => renderProductCard(p))}
  </StyledProductList>
);

ProductsList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default ProductsList;
