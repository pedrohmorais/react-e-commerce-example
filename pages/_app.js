/* eslint-disable react/no-unescaped-entities */
import App, { Container } from 'next/app';
import { GlobalStyle } from '@catho/quantum';
import React from 'react';
import Helmet from 'react-helmet';
import Header from 'components/Header';
import MainContent from 'components/MainContent';
import { Provider } from 'react-redux';
import withReduxStore from '../redux/with-redux-store';
import appStyle from './appStyle';

class MyApp extends App {
  render() {
    const {
      Component,
      pageProps,
      reduxStore,
      router,
    } = this.props;

    return (
      <Container>
        <Provider store={reduxStore}>
          <GlobalStyle />
          <Helmet>
            <style global="true">
              {`
                ${appStyle}
              `}
            </style>
          </Helmet>
          <MainContent>
            <Header currentUrl={router && router.pathname ? router.pathname : null} />
            <Component {...pageProps} />
          </MainContent>
        </Provider>
      </Container>
    );
  }
}

export default withReduxStore(MyApp);
