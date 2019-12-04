import React from 'react';
import { shallow } from 'enzyme';

import BulletLoader from 'components/BulletLoader';

describe('<BulletLoader />', () => {
  it('should match snapshot', () => {
    const component = <BulletLoader size="small" kind="default-loading" />;

    const wrapper = shallow(component);

    expect(wrapper).toMatchSnapshot();
  });
});
