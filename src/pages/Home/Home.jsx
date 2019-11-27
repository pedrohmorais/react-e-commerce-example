import React from 'react';
import PropTypes from 'prop-types';
import StyledWrapper from './styles';

const Footer = ({ children }) => <StyledWrapper>{children}</StyledWrapper>;
Footer.defaultProps = {
  children: <div>home</div>,
};

Footer.propTypes = {
  children: PropTypes.node,
};

export default Footer;
