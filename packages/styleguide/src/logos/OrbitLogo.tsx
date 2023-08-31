import React, { HTMLAttributes } from 'react';

import { mergeClasses } from '../helpers/mergeClasses';

export function OrbitLogo({ className, ...rest }: HTMLAttributes<SVGSVGElement>) {
  const _className = mergeClasses('icon-md text-icon-default', className);
  return (
    <svg viewBox="0 0 20 20" fill="none" role="img" className={_className} {...rest}>
      <path
        d="M8.17188 16.096C7.82399 14.9364 13.9701 11.6024 17.0866 10.0804C16.9417 11.1917 16.7967 13.052 14.9123 14.9364C13.2453 16.6034 8.60675 17.5456 8.17188 16.096Z"
        fill="currentColor"
      />
      <path
        d="M7.30215 3.70244C2.48963 5.90577 3.07426 10.7322 3.96815 12.8341C3.60573 12.9796 2.2286 13.052 2.01122 12.7621C1.79384 12.4722 2.44614 11.8199 2.88101 11.5294L2.73604 10.9496C0.706671 11.9649 -0.2461 13.22 0.054322 13.9218C0.271752 14.4297 2.73604 15.7331 11.071 11.8918C19.4059 8.0505 20.3481 5.94922 19.9132 5.22444C19.5653 4.64462 17.1349 4.9098 15.9995 5.1514L16.5792 5.80426C17.304 5.65931 17.8838 5.65931 17.8838 6.0217C17.8838 6.613 17.0866 7.13248 16.6518 7.39825C15.5404 5.27223 12.3031 1.41283 7.30215 3.70244Z"
        fill="currentColor"
      />
    </svg>
  );
}
