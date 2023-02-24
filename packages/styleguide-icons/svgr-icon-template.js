const svgrTemplate = (
  { imports, interfaces, componentName, props, jsx, exports },
  { tpl, options }
) => {
  return tpl`${imports}
type Props = {
  size?: '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  className?: string;
} & SVGProps<SVGSVGElement>;

function ${componentName}(props: Props) {
  const _className = props.className;
  return ${jsx};
}

${exports}
  `;
};

module.exports = svgrTemplate;
