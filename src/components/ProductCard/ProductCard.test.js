import React from 'react';
import { shallow } from 'enzyme';

import ProductCard from './ProductCard';
import ProductsService from 'services/Products';

describe('<ProductCard />', () => {
  it('should match snapshot', () => {
    const product = ProductsService.getById(1);
    const component = <ProductCard {...product} />;

    const wrapper = shallow(component);

    expect(wrapper).toMatchSnapshot();
  });
});
