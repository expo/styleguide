const template = require('./svgr-icon-template');

const defaultColor = '{color || "var(--expo-theme-icon-default)"}';

module.exports = {
  dimensions: false,
  titleProp: true,
  typescript: true,
  svgProps: {
    width: '{size || width || "20px"}',
    height: '{size || height || "20px"}',
    role: 'img',
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
