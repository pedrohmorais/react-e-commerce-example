import React from 'react';
import {
  bool, node, oneOf, oneOfType, string,
} from 'prop-types';
import { StyledInline } from 'components/Text/style';

const defaultProps = {
  size: 'medium',
  weight: 'regular',
  transform: 'none',
  className: '',
  italic: false,
};

const propTypes = {
  children: oneOfType([node, string]).isRequired,
  size: oneOf(['tiny', 'small', 'medium', 'big']),
  weight: oneOf(['regular', 'semi', 'bold']),
  transform: oneOf(['none', 'capitalize', 'lowercase', 'uppercase']),
  className: string,
  italic: bool,
};

const Inline = ({
  children, size, weight, transform, className, italic,
}) => (
  <StyledInline
    size={size}
    weight={weight}
    transform={transform}
    className={className}
    italic={italic}
  >
    {children}
  </StyledInline>
);

Inline.defaultProps = defaultProps;
Inline.propTypes = propTypes;

export default Inline;
