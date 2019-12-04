import styled from 'styled-components';
import { colors, device, fontFamily } from 'theme';

const bgImgPath = require('../../../public/assets/pages/folha-2.png');

const StyledHeader = styled.header`
  ${fontFamily}

  position: fixed;
  padding: 0px 15px;
  width: calc(100vw - 30px);
  height: 75px;
  left: 0;
  top: 0;
  background: url('${bgImgPath}') repeat-x;
  z-index: 1000;
  color: ${colors.grey};

  @media ${device.laptop} {
    padding: 0;
    width: 100%;
  }
`;
const StyledImageContainer = styled.a`
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  @media ${device.laptop} {
    position: relative;
    transform: translateX(0);
    left: 0;
  }

  img {
    height: 50px;
  }
`;

const StyledLinksList = styled.ul`
  display: none;
  position: absolute;
  right: 0;
  top: 0;
  height: 70px;
  margin: 0;
  padding: 0;
  list-style-type: none;

  @media ${device.laptop} {
    display: flex;
  }

  li {
    font-weight: 700;
    font-size: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0px 15px;

    &:hover {
      color:  ${colors.greenMain};
      cursor: pointer;
    }

    &.selected {
      color:  ${colors.greenMain};
    }

    a {
      color: inherit;
      text-decoration: none;
    }
  }
`;

const StyledImageBackground = styled.div`
  display: none;
`;

const StyledHeaderContent = styled.div`
  display: flex;
  position: relative;
  margin-top: -10px;
`;

const StyledMenuMobile = styled.div`

  svg {
    height: 20px;
  }
`;

const StyledMenuMobileButton = styled.div`
  position: fixed;
  right: 20px;
  top: 22px;
  width: 20px;
  height: 20px;

  @media ${device.tablet} {
    display: none;
  }

  svg {
    height: 20px;
  }
`;

const containerVisible = `
  display: flex;
  position: fixed;
  top: 64px;
  left: 0;
  height: 200px;
  width: 100vw;
  background-color: ${colors.lightHeader};
`;

const containerInvisible = `
  display: none;
`;

const StyledMenuContainer = styled.div`
  ${props => (props.open === true ? containerVisible : containerInvisible)}

  ul {
    list-style-type: none;
    width: 100%;
    margin: 0 15px;
    padding: 15px 0;
  }

  li {
    font-weight: 700;
    font-size: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px 0px;
    text-align: center;

    @media ${device.tablet} {
      font-size: 22px;
    }

    &:hover {
      color:  ${colors.greenMain};
      cursor: pointer;
    }

    &.selected {
      color:  ${colors.greenMain};
    }

    a {
      color: inherit;
      text-decoration: none;
    }
  }
`;


export {
  StyledHeader,
  StyledImageContainer,
  StyledLinksList,
  StyledImageBackground,
  StyledHeaderContent,
  StyledMenuMobile,
  StyledMenuContainer,
  StyledMenuMobileButton,
};
