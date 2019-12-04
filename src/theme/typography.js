import { css, createGlobalStyle } from 'styled-components';
import colors from './colors';

// eslint-disable-next-line no-unused-expressions
// createGlobalStyle`
//   @import url('https://fonts.googleapis.com/css?family=Roboto+Condensed:300,400,600,700&display=swap');
// `;

export const typography = css`
  font-family: 'Roboto Condensed', sans-serif;
`;

export const fontWeight = {
  light: 300,
  regular: 400,
  semi: 600,
  bold: 700,
};

export const placeholder = css`
  &::-webkit-input-placeholder {
    color: ${colors.warmGrey};
    font-style: italic;
  }

  &::-moz-placeholder {
    color: ${colors.warmGrey};
    font-style: italic;
  }

  &:-ms-input-placeholder {
    color: ${colors.warmGrey};
    font-style: italic;
  }

  &:-moz-placeholder {
    color: ${colors.warmGrey};
    font-style: italic;
  }
`;
