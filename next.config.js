const withCSS = require('@zeit/next-css');
const withImages = require('next-images');
const withFonts = require('next-fonts');

module.exports = withCSS(withImages(withFonts({
  env: {
    nodePath: 'src',
  },
  useFileSystemPublicRoutes: false,
})));


