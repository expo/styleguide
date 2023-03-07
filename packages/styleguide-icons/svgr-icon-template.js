const svgrTemplate = ({ imports, interfaces, componentName, props, jsx, exports }, { tpl, options }) => {
  return tpl`${imports}

import { mergeClasses } from '@/mergeClasses';

function ${componentName}({ className, ...props }: SVGProps<SVGSVGElement> & React.HTMLAttributes<SVGSVGElement>) {
  const _className = mergeClasses("icon-md text-icon-default", className);
  return ${jsx};
}

${componentName}.displayName = "${componentName}";
${exports}
  `;
};

module.exports = svgrTemplate;
