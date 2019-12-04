import React from 'react';
import FacebookLogin from 'react-facebook-login'
import StyledFacebookButton from 'components/FacebookButton/style';
import {
  string,
  any,
  bool,
} from 'prop-types';


const defaultProps = {
  textButton: 'Login pelo facebook',
  redirectUri: undefined,
  autoLoad: false,
  visible: true,
};

const propTypes = {
  textButton: string,
  redirectUri: string,
  autoLoad: bool,
  visible: bool,
  responseFacebook: any.isRequired,
};

const isLoading = kind => kind.indexOf('loading') !== -1;

const FacebookButton = ({
  textButton,
  redirectUri,
  responseFacebook,
  autoLoad,
  visible,
}) => (
  <StyledFacebookButton visible={visible}>
    <FacebookLogin
      appId="2318568901688810"
      autoLoad={autoLoad}
      fields="name,email,picture"
      callback={responseFacebook}
      textButton={textButton}
      redirectUri={redirectUri}
      icon="fa-facebook" />
  </StyledFacebookButton>
);

FacebookButton.defaultProps = defaultProps;
FacebookButton.propTypes = propTypes;

export default FacebookButton;