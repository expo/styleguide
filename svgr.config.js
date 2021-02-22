const template = require('./icon-template');

const defaultColor = '{color || "var(--expo-color-theme-icon-default)"}';

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
    removeDimensions: true,
    removeViewBox: false,
    removeTitle: false,
    removeDesc: true,
  },
  template,
};
