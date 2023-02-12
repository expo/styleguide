const template = require('./svgr-icon-template');

const defaultColor = '{color || "#000"}';

module.exports = {
  native: true,
  dimensions: false,
  typescript: true,
  filenameCase: 'pascal',
  svgProps: {
    width: '{_width}',
    height: '{_height}',
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
    plugins: [
      {
        name: 'removeDesc',
        active: true,
      },
      {
        name: 'removeViewBox',
        active: true,
      },
      {
        name: 'removeXMLNS',
        active: true,
      }
    ],
  },
  template,
};
