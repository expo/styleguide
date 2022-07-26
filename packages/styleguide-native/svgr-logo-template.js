function iconTemplate(api, opts, rest) {
  const { jsx } = rest;
  const template = api.template.smart({ plugins: ['typescript'] });
  const { componentName } = opts.state;
  const exportName = componentName.replace('Svg', '');

  return template.ast`
    import React from 'react';
    import Svg, { Path } from 'react-native-svg';
    import { IconProps } from '../types';

    export default function ${exportName}(props: IconProps) {
      const { color } = props;

      return ${jsx};
    }
  `;
}

module.exports = iconTemplate;
