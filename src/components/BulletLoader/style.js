import styled from 'styled-components';

import theme from 'styled-theming';
import { colors } from 'theme';

const backgroundColor = theme.variants('mode', 'kind', {
  'default-loading': { main: colors.lipstick },
  'primary-loading': { main: colors.white },
  'secondary-loading': { main: colors.white },
});

const ballSize = theme.variants('mode', 'size', {
  small: { main: '8px' },
  medium: { main: '10px' },
  large: { main: '15px' },
});

const containerSize = theme.variants('mode', 'size', {
  small: { main: '66px' },
  medium: { main: '120px' },
  large: { main: '250px' },
});

export default styled.div`
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes bounce {
    33% {
      transform: translateY(5px);
    }
    66% {
      transform: translateY(-4px);
    }
  }

  min-width: ${containerSize};
  width: 100%;

  > div {
    background-color: ${backgroundColor};
    width: ${ballSize};
    height: ${ballSize};
    margin: 0 2px;
    border-radius: 100%;
    animation-fill-mode: both;
    display: inline-block;
  }

  > div:nth-child(1) {
    animation: bounce 0.6s -0.14s infinite ease-in-out;
  }

  > div:nth-child(2) {
    animation: bounce 0.6s -0.07s infinite ease-in-out;
  }

  > div:nth-child(3) {
    animation: bounce 0.6s 0s infinite ease-in-out;
  }
`;
