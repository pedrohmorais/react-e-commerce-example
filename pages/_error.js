/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-nested-ternary */
import React from 'react';
import { Container } from '@catho/quantum';

class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
  }

  render() {
    const statusCode = this.props.statusCode || null;
    const message = this.props.message || 'Um erro desconhecido ocorreu!';
    return (
      <Container no-gutters withBreakpoints>
        {
          statusCode
            ? `Erro - ${this.props.statusCode} ${message}`
            : message
        }
      </Container>
    );
  }
}

export default Error;
