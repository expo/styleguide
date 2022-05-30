const template = require('./svgr-icon-template');

const defaultColor = '{color || "#000"}';

module.exports = {
  native: true,
  dimensions: false,
  typescript: true,
  filenameCase: 'pascal',
  svgProps: {
    width: '{size || width || 20}',
    height: '{size || height || 20}',
  },
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
