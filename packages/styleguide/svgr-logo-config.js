const template = require('./svgr-logo-template');

const defaultColor = '{color || "var(--expo-theme-icon-default)"}';

module.exports = {
  dimensions: false,
  titleProp: true,
  typescript: true,
  svgProps: {
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
