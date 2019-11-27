import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../ProductCard';

const renderProductCard = (product) => {
  const { name, slug, imgUrl, formatedPrice } = product;
  
  return (
    <ProductCard
      name={name}
      slug={slug}
      imgUrl={imgUrl}
      formatedPrice={formatedPrice} 
    />
  );
}

const ProductsList = ({
  products,
}) => {

  return (
    <ul>
      {products.map(p => renderProductCard(p))}
    </ul>
  );
}

ProductsList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.any).isRequired,
}

export default ProductsList;