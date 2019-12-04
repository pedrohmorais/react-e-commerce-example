import styled from 'styled-components';
import { device, colors, fontFamily } from 'theme';



const StyledSelectBlock = styled.div`
  margin-top: 8px;
`;

const StyledSelectLabel = styled.p`
  ${fontFamily};

  font-weight: 600;
  margin: 0 0 8px;

  @media ${device.laptop} {
    font-size: 16px
  }
`;

const StyledSelectContainer = styled.div`
  position: relative;

  @media ${device.laptop} {
  }
`;
const StyledSelectIconContainer = styled.div`
  position: relative;

  @media ${device.laptop} {
  }
`;

const StyledSelect = styled.select`
  ${fontFamily};

  background: #fff;
  margin-bottom: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 100%;
  border: 1px solid #d5d5d5;
  padding: 6px 8px;
  border-radius: 6px;
  cursor: pointer;

  @media ${device.laptop} {
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

const StyledSelectIcon = styled.div`
  position: absolute;
  width: 18px;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  height: auto;
  display: flex;

  svg {
    fill: ${colors.fontePadrao};
  }

  @media ${device.laptop} {
  }
`;

export {
  StyledSelect,
  StyledOption,
  StyledSelectContainer,
  StyledSelectIconContainer,
  StyledSelectIcon,
  StyledSelectBlock,
  StyledSelectLabel,
};
