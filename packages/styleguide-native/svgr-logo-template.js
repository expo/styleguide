function iconTemplate(api, opts, rest) {
  const { jsx, imports } = rest;
  const template = api.template.smart({ plugins: ['typescript'] });
  const { componentName } = opts.state;
  const exportName = componentName.replace('Svg', '');

  return template.ast`
    ${imports}
    import { IconProps } from '../types';

    export default function ${exportName}(props: SvgProps & IconProps) {
      const { color } = props;

      return ${jsx};
    }
  `;
}

module.exports = iconTemplate;
