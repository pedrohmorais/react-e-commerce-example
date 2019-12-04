import React from 'react';
import { shallow } from 'enzyme';

import Text from 'components/Text';

describe('<Text />', () => {
  describe('Paragraph', () => {
    it('should match snapshot', () => {
      const Paragraph = (
        <Text>
Hello World!
        </Text>
      );

      expect(shallow(Paragraph)).toMatchSnapshot();
    });
  });

  describe('Inline', () => {
    it('should match snapshot', () => {
      const Inline = (
        <Text.Inline>
Hello World!
        </Text.Inline>
      );

      expect(shallow(Inline)).toMatchSnapshot();
    });
  });

  describe('Heading', () => {
    it('H1 should match snapshot', () => {
      const H1 = (
        <Text.Heading>
Hello World!
        </Text.Heading>
      );

      expect(shallow(H1)).toMatchSnapshot();
    });

    it('H2 should match snapshot', () => {
      const H2 = (
        <Text.Heading level="2">
Hello World!
        </Text.Heading>
      );

      expect(shallow(H2)).toMatchSnapshot();
    });

    it('H3 should match snapshot', () => {
      const H3 = (
        <Text.Heading level="3">
Hello World!
        </Text.Heading>
      );

      expect(shallow(H3)).toMatchSnapshot();
    });
  });
});
