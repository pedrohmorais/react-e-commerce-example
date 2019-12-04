import React from 'react'

class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
  }
  
  render() {
    const statusCode = this.props.statusCode || null;
    const message = this.props.message || 'Um erro desconhecido ocorreu!'
    return (
      <p>
      {
        statusCode
        ? `Erro - ${this.props.statusCode} ${message}`
        : message
      }
      </p>
    )
  }
}
  
export default Error;