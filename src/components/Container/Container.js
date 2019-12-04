import React from 'react';
import {
  node,
  string,
} from 'prop-types';
import StyledContainer from './style';


const propTypes = {
  children: node.isRequired,
  type: string,
  height: string,
};

const defaultProps = {
  type: 'flex',
  height: undefined,
};

const Container = ({
  children,
  type,
  height,
}) => (
  <StyledContainer
    type={type}
    height={height}
  >
    {children}
  </StyledContainer>
);

Container.propTypes = propTypes;
Container.defaultProps = defaultProps;

export default Container;
