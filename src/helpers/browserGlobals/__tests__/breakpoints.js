import breakpoints, { screenHasMinSize, screenHasMaxSize } from '../breakpoints';

describe('Breakpoints', () => {
  it('should have default props', () => {
    expect(breakpoints).toEqual({ large: NaN, medium: NaN });
  });

  it('screenHasMinSize should work properly', () => {
    expect(screenHasMinSize()).toBe(false);
  });

  it('screenHasMaxSize should work properly', () => {
    expect(screenHasMaxSize()).toBe(false);
  });
});
