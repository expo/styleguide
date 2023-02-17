const svgrTemplate = (
  { imports, interfaces, componentName, props, jsx, exports },
  { tpl, options }
) => {
  return tpl`${imports}
type Props = {
  size?: number | string;
  color?: string;
} & SVGProps<SVGSVGElement>;

function ${componentName}(props: Props) {
  const { size, color, width = 24, height = 24 } = props;
  let _width = width;
  let _height = height;
  const sizes: { [i: string]: number } = {
    xs: 16,
    sm: 20,
    md: 24,
    lg: 28,
    xl: 32,
  }

  if (size && typeof size === 'string' && sizes[size]) {
    _width = sizes[size];
    _height = sizes[size];
  }

  return ${jsx};
}

${exports}
  `;
};

module.exports = svgrTemplate;
