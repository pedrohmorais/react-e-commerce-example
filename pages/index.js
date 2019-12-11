import React from 'react';
import {
  Container,
  Card,
} from '@catho/quantum';

import ProductsService from 'services/Products';
import ProductsList from 'components/ProductsList';
import StyledCardContent from './styles';

import Cookies from '../src/services/Cookies';


class Home extends React.Component {
  static async getInitialProps(props) {
    const { req, res } = props;
    const cookiesClass = new Cookies({ req, res });
   
    return {};
  }

  render() {
    const products = ProductsService.getAll();
    return (
      <div>
        <Container no-gutters withBreakpoints>
          <Card.HeaderText>
            <Card.Title small>Airsoft Community - venda de airsofts.</Card.Title>        
          </Card.HeaderText>
          <StyledCardContent>
            Todos os nossos produtos possuem nota fiscal no nome do comprador.
            Não vendemos armas de fogo,
            todos os produtos possuem ponta laranja e são destinados ao uso desportivo de airsoft.
          </StyledCardContent>
          <ProductsList products={products} />
        </Container>
      </div>
    );
  }
};


export default Home;
