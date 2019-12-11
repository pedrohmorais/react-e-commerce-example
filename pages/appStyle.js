import { colors } from 'theme';

const styles = `
  :after, :before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: inherit;
  }
  html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }
  body {
    line-height: 19px;
    font-size: 14px;
    padding: 0;
    margin: 75px 0 0 0;
    letter-spacing: 1px;
  }
  a {
    text-decoration: none;
    color: ${colors.url};;
  }
  #main-content {
    opacity: 0;
  }
`;


export default styles.toString();
