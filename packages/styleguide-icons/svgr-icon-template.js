const svgrTemplate = (
  { imports, interfaces, componentName, props, jsx, exports },
  { tpl, options }
) => {
  return tpl`${imports}
type Props = {
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
