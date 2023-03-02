const svgrTemplate = ({ imports, interfaces, componentName, props, jsx, exports }, { tpl, options }) => {
  return tpl`${imports}

function ${componentName}(props: SVGProps<SVGSVGElement>) {
  const _className = props.className || 'icon-md text-icon-default';
  return ${jsx};
}

${componentName}.displayName = "${componentName}";
${exports}
  `;
};

module.exports = svgrTemplate;
