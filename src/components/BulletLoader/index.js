import React from 'react';
import { oneOf } from 'prop-types';
import StyledBall from './style';

const propTypes = {
  kind: oneOf(['default-loading', 'primary-loading', 'secondary-loading']),
  size: oneOf(['small', 'medium', 'large']),
};

const defaultProps = {
  kind: 'primary-loading',
  size: 'medium',
};

const BulletLoader = ({ size, kind }) => (
  <StyledBall size={size} kind={kind}>
    <div />
    <div />
    <div />
  </StyledBall>
);

BulletLoader.defaultProps = defaultProps;
BulletLoader.propTypes = propTypes;

export default BulletLoader;
