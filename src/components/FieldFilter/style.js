import styled from 'styled-components';
import { device, colors, fontFamily } from 'theme';

const closedFilter = `
  display: none;
  z-index: -1;
  height: 0;
`;

const StyledFieldFilter = styled.div`
 
`;

const StyledFieldFilterBox = styled.div`
  ${fontFamily};

  position: fixed;
  top: 70px;
  overflow-y: scroll;
  z-index: 100;
  height: calc(100vh - 70px);
  width: 100vw;

  ${props => (props.open === false ? closedFilter : null)}

  @media ${device.laptop} {
    position: static;
    padding-right: 40px;
    overflow-y: visible;
    display: block;
    width: 100%;
    box-sizing: border-box;
  }

  #toggleFilterCheck {
    display: none;
  }

  #toggleFilterCheck:checked ~ * {
    display: block;
    height: auto;
    overflow-y: scroll;
  }
`;

const StyledFieldFilterContainer = styled.div`
  ${fontFamily};

  overflow-y: hidden;
  background-color: ${colors.fundoPadrao};
  padding: 20px 15px;

  @media ${device.laptop} {
    padding: 0;
  }
`;

const StyledFieldFilterTitle = styled.strong`
  font-size: 22px;
  color: ${colors.lightMain};
  font-weight: 600;
`;

const FilterField = styled.div`
  margin: 8px 0 12px;
  display: inline-block;
  width: 100%;
`;

const StyledOpenLabel = styled.label`
  color: ${colors.lightMain};
  background-color: ${colors.fundoPadrao};
  position: fixed;
  right: 0;
  top: 70px;
  font-size: 18px;
  font-weight: 600;
  vertical-align: bottom;
  height: 38px;
  padding-top: 14px;
  padding-left: 15px;
  padding-right: 15px;
  display: flex;
  z-index: 50;

  @media ${device.laptop} {
    display: none;
  }
  
  svg {
    fill: ${colors.lightMain};
    height: 20px;
    margin-right: 10px;
  }
`;

const StyledCloseLabel = styled.label`
  color: ${colors.lightMain};
  background-color: ${colors.fundoPadrao};
  position: fixed;
  right: 0;
  top: 70px;
  font-size: 18px;
  font-weight: 600;
  vertical-align: bottom;
  height: 38px;
  padding-top: 14px;
  padding-left: 15px;
  padding-right: 15px;
  display: flex;
  z-index: 80;
  width: 150px;
  justify-content: flex-end;

  @media ${device.laptop} {
    display: none;
  }
  
  svg {
    fill: ${colors.lightMain};
    height: 22px;
    margin-left: 10px;
  }
`;

const FilterSeparator = styled.div`
  display: inline-block;
  width: 100%;
  position: relative;
  height: 50px;
  margin: 0 0 6px;

  &::after {
    content: " ";
    background-color: ${colors.lightMain};
    width: 100%;
    height: 2px;
    border-radius: 2px;
    background-color: #F3F8F2;
    display: inline-block;
    transform: translateY(-50%);
    top: 50%;
    position: absolute;
    left: 0;
  }
`;


export {
  StyledFieldFilterBox,
  StyledOpenLabel,
  StyledCloseLabel,
  StyledFieldFilter,
  FilterField,
  StyledFieldFilterTitle,
  FilterSeparator,
  StyledFieldFilterContainer,
};
