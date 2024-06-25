const svgrTemplate = ({ imports, interfaces, componentName, props, jsx }, { tpl, options }) => {
  return tpl`${imports}

import { mergeClasses } from "../mergeClasses";

export function ${componentName}({ className, ...props }: React.SVGProps<SVGSVGElement> & React.HTMLAttributes<SVGSVGElement>) {
  const _className = mergeClasses("icon-md text-icon-default", className);
  return ${jsx};
}

${componentName}.displayName = "${componentName}";`;
};

module.exports = svgrTemplate;
