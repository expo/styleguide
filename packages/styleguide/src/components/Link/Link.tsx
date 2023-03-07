import React from 'react';

import { LinkBase, LinkBaseProps } from './LinkBase';
import { mergeClasses } from '../../helpers/mergeClasses';

export function Link({ className, disabled, ...rest }: LinkBaseProps) {
  return (
    <LinkBase
      className={mergeClasses('text-link transition-opacity', !disabled && 'hocus:opacity-80', className)}
      {...rest}
    />
  );
}
