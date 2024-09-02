require('dotenv').config();

const svgo = require('@figma-export/transform-svg-with-svgo');
const figmaUtils = require('@figma-export/utils');

const template = require('./svgr-icon-template');
const pascalCase = figmaUtils.pascalCase;
const fileId = process.env.FILE_ID;

function getComponentName({ componentName, pageName }) {
  if (pageName === 'outline' || pageName === 'custom') {
    return pascalCase(componentName) + 'Icon';
  }

  return pascalCase(componentName) + pascalCase(pageName) + 'Icon';
}

const outputters = [
  require('@figma-export/output-components-as-svgr')({
    getFileExtension: () => '.tsx',
    getComponentName,
    getSvgrConfig: ({ componentName, pageName }) => ({
      typescript: true,
      svgProps: {
        className: '{_className}',
        role: 'img',
      },
      replaceAttrValues: {
        black: 'currentColor',
        [componentName]: `${componentName}-${pageName}-icon`,
      },
      template,
    }),
    // Exports the component as a named export without the '.tsx' extension inside the generated index.ts file. By default the '.tsx' extension is added, which makes TypeScript complain.
    getExportTemplate: ({ componentName, pageName }) =>
      `export { ${getComponentName({
        componentName,
        pageName,
      })} } from './${getComponentName({ componentName, pageName })}';`,
    output: './src',
  }),
];

const commonSVGOConfig = [
  {
    name: 'cleanupIDs',
    active: true,
    params: {
      remove: true,
      minify: false,
    },
  },
  {
    name: 'removeHiddenElems',
    active: true,
  },
  {
    name: 'removeXMLNS',
    active: true,
  },
  {
    name: 'removeUselessStrokeAndFill',
    active: true,
  },
  {
    name: 'removeUselessDefs',
    active: true,
  },
  {
    name: 'collapseGroups',
    active: true,
  },
  {
    name: 'removeEmptyContainers',
    active: true,
  },
  {
    name: 'removeDimensions',
    active: true,
  },
  {
    name: 'sortAttrs',
    active: true,
  },
];

/** @type {import('svgo').PluginConfig[]} */
const solidSVGOConfig = [
  ...commonSVGOConfig,
  {
    name: 'removeAttrs',
    params: {
      attrs: 'fill',
    },
  },
  {
    name: 'addAttributesToSVGElement',
    params: {
      attribute: {
        fill: 'currentColor',
      },
    },
  },
];

/** @type {import('svgo').PluginConfig[]} */
const customSVGOConfig = [
  ...commonSVGOConfig,
];

/** @type {import('svgo').PluginConfig[]} */
const outlineSVGOConfig = [
  ...commonSVGOConfig,
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

/** @type {import('svgo').PluginConfig[]} */
const duotoneSVGOConfig = [
  ...commonSVGOConfig,
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
        onlyFromPages: ['duotone'],
        transformers: [svgo({ multipass: true, plugins: duotoneSVGOConfig })],
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
    ],
  ],
};
