import styles from 'brandStyle/layout/breakpoints.scss';

import { window } from './';

const breakpoints = {
  medium: parseInt(styles.mediumScreenMinWidth, 10),
  large: parseInt(styles.largeScreenMinWidth, 10),
};

export function screenHasMinSize(size = 'medium') {
  return window.matchMedia(`(min-width: ${breakpoints[size]}px)`).matches;
}

export function screenHasMaxSize(size = 'medium') {
  return window.matchMedia(`(max-width: ${breakpoints[size]}px)`).matches;
}

export default breakpoints;
