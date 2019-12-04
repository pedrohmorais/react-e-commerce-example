import ErrorPage from '../../../pages/_error';

const customErrorComponent = ({statusCode, message}) => {
 
  return <ErrorPage statusCode={statusCode} message={message} />
}

export default customErrorComponent;
