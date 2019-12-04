import styled from 'styled-components';
import theme from 'styled-theming';
import { colors, fontFamily } from 'theme';

const backgroundColor = theme.variants('mode', 'kind', {
  default: { main: colors.greenMain },
  primary: { main: colors.lipstick },
  'primary-loading': { main: colors.lipstick },
  'primary-disabled': { main: colors.hobbitGrey },
  secondary: { main: colors.spacexBlue },
});

const backgroundColorOnHover = theme.variants('mode', 'kind', {
  default: { main: colors.greenSecond },
  primary: { main: colors.berry },
  'primary-loading': { main: colors.lipstick },
  'primary-disabled': { main: colors.hobbitGrey },
  secondary: { main: colors.lightSpacexBlue },
});

const borderColor = theme.variants('mode', 'kind', {
  default: { main: colors.greenMain },
  primary: { main: colors.lipstick },
  'primary-loading': { main: colors.lipstick },
  'primary-disabled': { main: colors.hobbitGrey },
  secondary: { main: colors.spacexBlue },
});

const borderColorOnHover = theme.variants('mode', 'kind', {
  default: { main: colors.greenSecond },
  primary: { main: colors.berry },
  'primary-loading': { main: colors.berry },
  'primary-disabled': { main: colors.hobbitGrey },
  secondary: { main: colors.lightSpacexBlue },
});

const color = theme.variants('mode', 'kind', {
  default: { main: colors.lightMain },
  primary: { main: colors.lightMain },
  'primary-loading': { main: colors.lightMain },
  'primary-disabled': { main: colors.brownishGrey },
  secondary: { main: colors.lightMain },
});

const colorOnHover = theme.variants('mode', 'kind', {
  default: { main: colors.greenMain },
  primary: { main: colors.lightMain },
  'primary-loading': { main: colors.lightMain },
  'primary-disabled': { main: colors.brownishGrey },
  secondary: { main: colors.lightMain },
});

const cursorOnHover = theme.variants('mode', 'kind', {
  default: { main: 'pointer' },
  primary: { main: 'pointer' },
  'primary-loading': { main: 'not-allowed' },
  'primary-disabled': { main: 'not-allowed' },
  secondary: { main: 'pointer' },
});

const opacity = theme.variants('mode', 'kind', {
  default: { main: '1' },
  primary: { main: '1' },
  'primary-loading': { main: '0.7' },
  'primary-disabled': { main: '1' },
  secondary: { main: '1' },
});

const size = theme.variants('mode', 'size', {
  small: { main: '30px' },
  medium: { main: '40px' },
  large: { main: '50px' },
});

export default styled.button`
  ${fontFamily}

  background-color: ${backgroundColor};
  border-radius: 6px;
  border: 2px solid ${borderColor};
  color: ${color};
  cursor: ${cursorOnHover};
  height: ${size};
  padding: 0 20px;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  opacity: ${opacity};
  transition: background-color 0.3s ease, border 0.3s ease, color, color 0.3s ease;
  &:hover {
    background-color: ${backgroundColorOnHover};
    border-color: ${borderColorOnHover};
    color: ${colorOnHover};
  }

  & > * {
    color: ${color};
    font-weight: 600;
  }
`;
