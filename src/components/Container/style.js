import styled from 'styled-components';
import {
  pageContainer,
} from 'theme';

const renderFlex = `
  display: flex;
`;

const renderBlock = `
  display: block;
  padding: 10px 0 0;
`;

const renderHeight = (height) => {
  if (height) {
    return `height: ${height}`;
  }

  return null;
};

const StyledContainer = styled.div`
  ${pageContainer}

  ${props => (props.type === 'flex' ? renderFlex : null)}
  ${props => (props.type === 'block' ? renderBlock : null)}
  ${props => (props.height ? renderHeight(props.height) : null)}
  
`;

export default StyledContainer;
