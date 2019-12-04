const breakpoints = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
  desktop: 2560,
};

const size = {
  mobileS: `${breakpoints.mobileS}px`,
  mobileM: `${breakpoints.mobileM}px`,
  mobileL: `${breakpoints.mobileL}px`,
  tablet: `${breakpoints.tablet}px`,
  laptop: `${breakpoints.laptop}px`,
  laptopL: `${breakpoints.laptopL}px`,
  desktop: `${breakpoints.desktop}px`,
};

const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
};

export default device;
export { breakpoints };
