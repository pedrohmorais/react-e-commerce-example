import styled from 'styled-components';
import { device, colors, fontFamily } from 'theme';



const StyledCheckboxBlock = styled.div`
  margin-top: 8px;
`;

const StyledCheckboxLabel = styled.p`
  ${fontFamily};

  padding-left: 10px;
  margin: auto 0;
  font-weight: 600;

  @media ${device.laptop} {
    font-size: 16px
  }

  &::selection {
    background-color: transparent;
  }
`;

const StyledCheckboxContainer = styled.label`
  position: relative;
  display: flex;
  cursor: pointer;

  .checkmark {
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: ${colors.greenMain};

  }

  .checkmark:after {
    content: " ";
    display: none;
    position: absolute;
    left: 10px;
    top: 7px;
    width: 5px;
    height: 10px;
    border: solid ${colors.fontePadrao};
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  input:checked ~ .checkmark:after {
    display: block;
  }
`;

const StyledCheckbox = styled.input`
  display: none;

  & ~ .checkmark {
    background-color: ${colors.greenMain};
  }

  &:checked ~ .checkmark:after {
    display: block;
  }

  &[disabled] {
    cursor: no-drop;
  }
`;

const StyledOption = styled.option`
  ${fontFamily};

  @media ${device.laptop} {
  }
`;

export {
  StyledCheckbox,
  StyledOption,
  StyledCheckboxContainer,
  StyledCheckboxBlock,
  StyledCheckboxLabel,
};
