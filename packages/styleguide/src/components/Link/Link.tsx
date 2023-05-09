import React, { forwardRef } from 'react';

import { LinkBase, LinkBaseProps } from './LinkBase';
import { mergeClasses } from '../../helpers/mergeClasses';

export const Link = forwardRef<HTMLAnchorElement, LinkBaseProps>(({ className, disabled, ...rest }, ref) => {
  return (
    <LinkBase
      className={mergeClasses('text-link transition-opacity', !disabled && 'hocus:opacity-80', className)}
      ref={ref}
      {...rest}
    />
  );
});
