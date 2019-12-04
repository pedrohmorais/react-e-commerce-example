import styled from 'styled-components';
import {
  pageContainer,
  cardContainer,
  colors,
  fontWeight,
  device,
  fontFamily,
} from 'theme';

const StyledCamposPage = styled.div`
  ${fontFamily}

  color: ${colors.lightMain};

  h1 {
    color: ${colors.lightMain}
  }

  a {
    color: ${colors.urlEscuro};
    font-weight: 600;
  }
`;

const containerVisible = `
  opacity: 1;
`;

const containerInisible = `
  opacity: 0;
  visibility: hidden;
`;

const StyledFieldsContainer = styled.div`
  ${fontFamily}

  transition: opacity 0.6s ease-out;

  ${props => (props.visibility === 'true' ? containerVisible : containerInisible)}

`;

const StyledMain = styled.div`
  ${fontFamily}

  width: 850px;
`;

const StyledFilter = styled.div`
  ${fontFamily}

  width: 0;
  height: 0;
  
  @media ${device.laptop} {
    height: auto;
    width: calc(100% - 850px);
  }
`;

const StyledBreadCrumbContainer = styled.div`
  padding: 0 15px;
  width: 100%;
  margin: 2px 0 15px;
  
  @media ${device.laptop} {
    margin: 40px 0 20px;
    padding: 0;
  }
`;

const StyledNoFieldsMessage = styled.p`
  color: ${colors.greenMain};
  font-weight: 600;
  font-size: 18px;
`;

const StyledInformationBlock = styled.div`
  padding: 0 15px;

  h1 {

  }

  @media ${device.laptop} {
    padding: 0;
    margin-top: -16px;
  }
`;

export {
  StyledInformationBlock,
  StyledCamposPage,
  StyledFieldsContainer,
  StyledMain,
  StyledFilter,
  StyledBreadCrumbContainer,
  StyledNoFieldsMessage,
};
