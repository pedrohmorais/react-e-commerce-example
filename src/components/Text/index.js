import React from 'react';
import {
  bool, node, oneOf, oneOfType, string,
} from 'prop-types';

import Heading from 'components/Text/Heading';
import Inline from 'components/Text/Inline';
import { StyledParagraph } from 'components/Text/style';

const defaultProps = {
  size: 'medium',
  weight: 'regular',
  transform: 'none',
  italic: false,
  className: '',
};

const propTypes = {
  children: oneOfType([node, string]).isRequired,
  size: oneOf(['tiny', 'small', 'medium', 'big']),
  weight: oneOf(['regular', 'semi', 'bold']),
  transform: oneOf(['none', 'capitalize', 'lowercase', 'uppercase']),
  italic: bool,
  className: string,
};

const Text = ({
  children, size, weight, transform, italic, className,
}) => (
  <StyledParagraph
    size={size}
    weight={weight}
    transform={transform}
    italic={italic}
    className={className}
  >
    {children}
  </StyledParagraph>
);

Text.defaultProps = defaultProps;
Text.propTypes = propTypes;
Text.Heading = Heading;
Text.Inline = Inline;

export default Text;
