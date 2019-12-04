import styled from 'styled-components';
import { device, colors, fontFamily } from 'theme';

const StyledGunsmithCard = styled.div`
  ${fontFamily};
  
  background-color: ${colors.white};
  position: relative;
  display: flex;
  height: auto;
  padding: 20px 0;
  max-width: 850px;
  box-shadow: 2px 2px 2px 0 rgba(181,215,45,.6);
  margin: 20px 0;

  @media ${device.tablet} {
    height: 226px;
  }

  @media ${device.laptop} {
    border-radius: 6px;
    height: 170px;
    padding: 0;
  }
`;

const StyledGunsmithCardImageBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100px;

  @media ${device.tablet} {
    width: 140px;
  }

  @media ${device.laptop} {
    width: 180px;
  }

  figure {
    height: 80px;
    width: 80px;
    position: relative;
    margin: 10px;

    @media ${device.tablet} {
      margin: 20px;
    }

    @media ${device.laptop} {
      height: 140px;
      width: 140px;
    }

    &::after {
      content: " ";
      height: calc(100% + 30px);
      position: absolute;
      right: -15px;
      top: -15px;
      width: 1px;
      background-color: ${colors.fontePadrao};
      opacity: .8;
      border-radius: 1px;

      @media ${device.tablet} {
        width: 2px;
        right: -20px;
      }
    }

    img {
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      width: 100%;
    }
  }
  
`;

const spanHeightWithStyleType = `
  min-height: 40px;
`;

const StyledGunsmithCardInfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 16px;
  padding-right: 16px;
  width: 100%;
  
  @media ${device.laptop} {
    padding-right: 0;
    width: calc(100% - 220px);
  }

  h2 {
    margin: 0 0 10px 0;
    color: ${colors.tituloFundoClaro};
    font-size: 20px;
    line-height: 23px;

    @media ${device.tablet} {
      font-size: 26px;
      line-height: 26px;
    }
  }

  .fieldCardAddress {
    font-size: 12px;
    line-height: 15px;

    @media ${device.tablet} {
      font-size: 18px;
      line-height: 18px;
    }

    span {
      display: inline-block;
      ${props => (props.withStyleType === true ? spanHeightWithStyleType : null)}

      @media ${device.laptop} {
        padding-right: 40px;
      }
    }
  }
`;
const StyledGunsmithSeeMore = styled.div`
  display: none;
  @media ${device.laptop} {
    flex-direction: column;
    justify-content: center;
    width: 200px;
    display: flex;
  }
`;

const StyledClickableArea = styled.div`
  display: inline-block;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 25;
  width: 100%;
  height: 100%;

  @media ${device.laptop} {
    display: none;
  }
`;

const StyledGunsmithTypes = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 4px 0 0 ;
  display: inline-block;

  @media ${device.tablet} {
    margin: 20px 0 0 ;
    display: flex;
  }

  li {
    background-color: ${colors.grey};
    color: ${colors.lightMain};
    border-radius: 20px;
    padding: 2px 10px;
    margin-right: 8px;
    font-weight: 600;
    display: inline-block;
    margin: 0 8px 8px 0;
    font-size: 12px;

    @media ${device.tablet} {
      padding: 5px 15px;
      font-size: 14px;
      margin: 0 8px 0 0;

    }
  }
`;

const StyledGunsmithDescricao = styled.div`

`;

const StyledInfoButton = styled.div`
  margin-top: 15px;
  
  @media ${device.laptop} {
    display: none;
  }
`;

export {
  StyledGunsmithCard,
  StyledGunsmithCardImageBlock,
  StyledGunsmithCardInfoBlock,
  StyledGunsmithSeeMore,
  StyledGunsmithTypes,
  StyledClickableArea,
  StyledGunsmithDescricao,
  StyledInfoButton,
};
