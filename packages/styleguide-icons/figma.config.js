require('dotenv').config();

const svgo = require('@figma-export/transform-svg-with-svgo');
const figmaUtils = require('@figma-export/utils');
const template = require('./svgr-icon-template');
const pascalCase = figmaUtils.pascalCase
const fileId = process.env.FILE_ID;

const outputters = [
  require('@figma-export/output-components-as-svgr')({
    getFileExtension: () => '.tsx',
    getComponentName: ({ componentName, pageName }) => {
      if (pageName === 'outline' || pageName === 'custom') {
        return pascalCase(componentName) + 'Icon';
      }

      return pascalCase(componentName) + pascalCase(pageName) + 'Icon';
    },
    getSvgrConfig: () => ({
      typescript: true,
      svgProps: {
        width: '{_width}',
        height: '{_height}',
        role: 'img',
      },
      replaceAttrValues: {
        currentColor: '{color || "var(--expo-theme-icon-default)"}',
        black: '{color || "var(--expo-theme-icon-default)"}',
      },
      template,
    }),
    output: './tmp',
  }),
];

/** @type {import('svgo').PluginConfig[]} */
const solidSVGOConfig = [
  {
    name: 'removeDimensions',
    active: true
  },
  {
    name: 'sortAttrs',
    active: true,
  },
  {
    name: 'removeAttrs',
    params: {
      attrs: "fill"
    }
  },
  {
    name: 'addAttributesToSVGElement',
    params: {
      attribute: {
        fill: "currentColor"
      }
    }
  }
];

/** @type {import('svgo').PluginConfig[]} */
const customSVGOConfig = [
  {
    name: 'removeDimensions',
    active: true
  },
  {
    name: 'sortAttrs',
    active: true,
  }
];

/** @type {import('svgo').PluginConfig[]} */
const outlineSVGOConfig = [
  {
    name: 'removeDimensions',
    active: true,
  },
  {
    name: 'sortAttrs',
    active: true,
  },
  {
    name: 'removeAttrs',
    params: {
      attrs: 'stroke',
    },
  },
  {
    name: 'addAttributesToSVGElement',
    params: {
      attribute: {
        stroke: 'currentColor',
      },
    },
  },
];

/** @type {import('@figma-export/types').FigmaExportRC} */
module.exports = {
  commands: [
    [
      'components',
      {
        fileId,
        onlyFromPages: ['outline'],
        transformers: [svgo({ multipass: true, plugins: outlineSVGOConfig })],
        outputters,
      },
    ],
    [
      'components',
      {
        fileId,
        onlyFromPages: ['solid'],
        transformers: [svgo({ multipass: true, plugins: solidSVGOConfig })],
        outputters,
      },
    ],
    [
      'components',
      {
        fileId,
        onlyFromPages: ['custom'],
        transformers: [svgo({ multipass: true, plugins: customSVGOConfig })],
        outputters,
      },
    ]
  ],
};
