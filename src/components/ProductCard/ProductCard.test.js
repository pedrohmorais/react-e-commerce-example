import React from 'react';
import renderer from 'react-test-renderer';

import ProductsService from 'services/Products';
import { ProductCard } from './ProductCard';

describe('<ProductCard />', () => {
  it('should match snapshot', () => {
    const product = ProductsService.getById(1);
    product.addToCartAction = jest.fn();

    expect(
      renderer.create(<ProductCard {...product} />).toJSON(),
    ).toMatchSnapshot();
  });
});
