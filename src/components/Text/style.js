import styled, { css } from 'styled-components';
import theme from 'styled-theming';
import { fontFamily } from 'theme';

const FONT_WEIGHT_REGULAR = 400;
const FONT_WEIGHT_SEMI = 600;
const FONT_WEIGHT_BOLD = 700;

const paragraphSize = theme.variants('mode', 'size', {
  tiny: { main: '10px' },
  small: { main: '12px' },
  medium: { main: '14px' },
  big: { main: '16px' },
});

const headingSize = theme.variants('mode', 'level', {
  1: { main: '25px' },
  2: { main: '22px' },
  3: { main: '16px' },
});

const fontWeight = theme.variants('mode', 'weight', {
  regular: { main: FONT_WEIGHT_REGULAR },
  semi: { main: FONT_WEIGHT_SEMI },
  bold: { main: FONT_WEIGHT_BOLD },
});

const textStyle = css`
  ${fontFamily}

  font-weight: ${fontWeight};
  font-style: ${({ italic }) => (italic ? 'italic' : 'normal')};
  text-transform: ${({ transform }) => transform};
`;

export const paragraphStyle = css`
  ${textStyle};
  font-size: ${paragraphSize};
`;

export const StyledParagraph = styled.p`
  ${paragraphStyle};
`;

export const StyledHeading = styled.h1`
  ${textStyle};
  font-size: ${headingSize};
`;

export const StyledInline = styled.span`
  ${paragraphStyle};
`;
