import React from 'react';
import { ThemeProvider } from 'styled-components';
import ReactBreakpoints from 'react-breakpoints';

import { breakpoints } from '../src/theme/layout/media-queries';

export const ThemeDecorator = story => (
  <ReactBreakpoints breakpoints={breakpoints}>
    <ThemeProvider theme={{ mode: 'main' }}>{story()}</ThemeProvider>
  </ReactBreakpoints>
);
