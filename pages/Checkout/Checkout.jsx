import React from 'react';
import {
  Container,
  Card,
  Button,
} from '@catho/quantum';

import StyledWrapper from './styles';
import PagarMeService from '../../src/services/PagarMe';

class Checkout extends React.Component {
  static async getInitialProps(props) {
    const { req, res } = props;
    const pagarMeClass = new PagarMeService();
    await pagarMeClass.connect();
    await pagarMeClass.connectCustomerCard();
    // pagarMeClass.getCustomerInfo();
    await pagarMeClass.getRecipients();
    // await pagarMeClass.createTransaction();
    return {};
  }
  render() {
    
    return (
      <StyledWrapper>
        <Container no-gutters withBreakpoints>
          
        </Container>
      </StyledWrapper>
    );
  }
}

export default Checkout;
