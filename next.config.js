const withImages = require('next-images');
const withFonts = require('next-fonts');

module.exports = withImages(withFonts({
  env: {
    nodePath: 'src',
  },
  useFileSystemPublicRoutes: false,
}));


