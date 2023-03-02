const svgrTemplate = ({ imports, interfaces, componentName, props, jsx, exports }, { tpl, options }) => {
  return tpl`${imports}
import { twMerge } from "tailwind-merge";

function ${componentName}(props: SVGProps<SVGSVGElement>) {
  const _className = twMerge("icon-md text-icon-default", props.className);
  return ${jsx};
}

${componentName}.displayName = "${componentName}";
${exports}
  `;
};

module.exports = svgrTemplate;
