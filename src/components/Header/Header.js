/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-array-index-key */
import React, { Component } from 'react';
import Container from 'components/Container';
import { Link } from 'react-router-dom';
import {
  string,
} from 'prop-types';
import { SVGHamburguer } from 'components/SvgIcons';
import {
  StyledHeader,
  StyledImageContainer,
  StyledLinksList,
  StyledHeaderContent,
  StyledMenuMobile,
  StyledMenuContainer,
  StyledMenuMobileButton,
} from './style';

const defaultProps = {
  currentUrl: null,
};

const propTypes = {
  currentUrl: string,
};

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({
      open: !this.state.open,
    });
  }

  render() {
    const { currentUrl } = this.props;
    const logoUrl = require('../../../public/assets/pages/airsoft-community-logo.jpg');

    const renderUrls = () => {
      const urls = [
        {
          label: 'Home',
          url: '/',
        },
        {
          label: 'Carrinho',
          url: '/carrinho',
        },
      ];

      const componentsUrl = [];

      urls.forEach((url, index) => (
        componentsUrl.push(
          <li key={`headerLabel${index}`} className={currentUrl === url.url ? 'selected' : null}>
            <Link to={url.url}>{url.label}</Link>
          </li>,
        )
      ));

      return componentsUrl;
    };

    // eslint-disable-next-line react/destructuring-assignment
    const isOpen = this.state.open;

    return (
      <StyledHeader>
        <Container type="block">
          <StyledHeaderContent>
            <StyledImageContainer href="/">
              <img alt="logo" src={logoUrl} />
            </StyledImageContainer>
            <StyledLinksList>
              {renderUrls()}
            </StyledLinksList>
            <StyledMenuMobile>
              <StyledMenuMobileButton onClick={this.toggleMenu}>
                <SVGHamburguer />
              </StyledMenuMobileButton>
              <StyledMenuContainer open={isOpen}>
                <ul>
                  {renderUrls()}
                </ul>
              </StyledMenuContainer>
            </StyledMenuMobile>
          </StyledHeaderContent>
        </Container>
      </StyledHeader>
    );
  }
}


Header.defaultProps = defaultProps;
Header.propTypes = propTypes;

export default Header;
