import React from 'react';
import PropTypes from 'prop-types';
import StyledWrapper from './styles';

const ErrorPage = ({ children, errorNumber }) => <StyledWrapper>{errorNumber} {children}</StyledWrapper>;
ErrorPage.defaultProps = {
  children: <span>not found</span>,
  errorNumber: 404,
};

ErrorPage.propTypes = {
  children: PropTypes.node,
  errorNumber: PropTypes.number,
};

export default ErrorPage;
