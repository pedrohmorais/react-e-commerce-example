import React from 'react';
import {
  bool, func, node, oneOf, string,
} from 'prop-types';
import Text from 'components/Text';
import StyledButton from 'components/Button/style';
import BulletLoader from 'components/BulletLoader';

const defaultProps = {
  fullWidth: false,
  kind: 'default',
  onClick: () => {},
  size: 'medium',
  type: 'button',
  className: '',
};

const propTypes = {
  children: node.isRequired,
  fullWidth: bool,
  kind: oneOf(['default', 'primary', 'primary-loading', 'primary-disabled', 'secondary']),
  onClick: func,
  size: oneOf(['small', 'medium', 'large']),
  type: oneOf(['submit', 'reset', 'button']),
  className: string,
};

const isLoading = kind => kind.indexOf('loading') !== -1;

const Button = ({
  children, fullWidth, kind, onClick, size, className, type,
}) => (
  <StyledButton
    kind={kind}
    size={size}
    fullWidth={fullWidth}
    onClick={onClick}
    className={className}
    type={type}
    theme={{ mode: 'main' }}
  >
    <Text.Inline weight="semi">
      {isLoading(kind) ? <BulletLoader size={size} kind={kind} /> : children}
    </Text.Inline>
  </StyledButton>
);

Button.defaultProps = defaultProps;
Button.propTypes = propTypes;

export default Button;
