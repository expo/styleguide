const path = require('path');

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function iconTemplate(api, opts, { jsx }) {
  const template = api.template.smart({ plugins: ['typescript'] });
  const { componentName, filePath } = opts.state;
  const exportName = componentName.replace('Svg', '');
  const title = capitalize(path.basename(filePath, '.svg'));

  return template.ast`
    import React from 'react';
    import { IconProps } from '../types';

    export function ${exportName}(props: IconProps) {
      const { title = "${title}", size, color, width, height, titleId } = props;

      return ${jsx};
    }
  `;
}

module.exports = iconTemplate;
