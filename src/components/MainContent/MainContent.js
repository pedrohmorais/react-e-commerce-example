/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  node,
} from 'prop-types';
import StyledMainContent from './style';

const propTypes = {
  children: node.isRequired,
};

const MainContent = ({
  children,
}) => (
  <StyledMainContent id="main-content">
    {children}
  </StyledMainContent>
);


MainContent.propTypes = propTypes;

export default MainContent;
