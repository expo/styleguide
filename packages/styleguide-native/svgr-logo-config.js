const template = require('./svgr-logo-template');

const defaultColor = '{color || "#000"}';

module.exports = {
  native: true,
  dimensions: false,
  typescript: true,
  filenameCase: 'pascal',
  prettierConfig: {
    parser: 'typescript',
  },
  replaceAttrValues: {
    currentColor: defaultColor,
    '#000': defaultColor,
    black: defaultColor,
  },
  svgoConfig: {
    multipass: true,
    plugins: {
      removeDesc: true,
      removeViewBox: false,
      removeXMLNS: true,
    },
  },
  template,
};
