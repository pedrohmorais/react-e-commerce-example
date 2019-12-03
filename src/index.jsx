import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from '@catho/quantum';
import { BrowserRouter, Switch, Route  } from 'react-router-dom'
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import Product from './pages/Product';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <>
    <GlobalStyle />
    <BrowserRouter>
      <Switch>
        <Route path="/produto/:productSlug" exact component={Product} />
        <Route path="/" exact component={Home} />
        <Route path='*' component={ErrorPage} />
      </Switch>
    </ BrowserRouter>
  </>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
