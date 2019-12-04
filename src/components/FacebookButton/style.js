import styled from 'styled-components';
import theme from 'styled-theming';
import { colors } from 'theme';

export default styled.div`
  display: ${props => props.visible ? 'inline-block':'none'};
  background-color: ${colors.spacexBlue};
  border: 2px solid ${colors.spacexBlue};
  color: ${colors.white};
  padding: 0 10px;
  transition: background-color 0.3s ease, border 0.3s ease, color, color 0.3s ease;
  &:hover {
    background-color: ${colors.white};
    color: ${colors.spacexBlue};
  }

  i {
    font-size: 18px;
  }

  button {
    padding: 10px;
    font-size: 14px;
    background-color: inherit;
    border: none;
    color: inherit;
  }
`;