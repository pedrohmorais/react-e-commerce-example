import React from 'react';
import {
  bool, node, oneOf, oneOfType, string,
} from 'prop-types';
import { StyledHeading } from 'components/Text/style';

const defaultProps = {
  level: '1',
  weight: 'semi',
  transform: 'none',
  italic: false,
  className: '',
};

const propTypes = {
  children: oneOfType([node, string]).isRequired,
  level: string,
  transform: oneOf(['none', 'capitalize', 'lowercase', 'uppercase']),
  weight: oneOf(['regular', 'semi', 'bold']),
  italic: bool,
  className: string,
};

const Heading = ({
  children, level, weight, transform, className, italic,
}) => {
  let HeadingLevel;

  switch (level) {
    case '2':
      HeadingLevel = StyledHeading.withComponent('h2');
      break;
    case '3':
      HeadingLevel = StyledHeading.withComponent('h3');
      break;
    default:
      HeadingLevel = StyledHeading;
      break;
  }

  return (
    <HeadingLevel
      level={level}
      weight={weight}
      transform={transform}
      className={className}
      italic={italic}
    >
      {children}
    </HeadingLevel>
  );
};

Heading.defaultProps = defaultProps;
Heading.propTypes = propTypes;

export default Heading;
