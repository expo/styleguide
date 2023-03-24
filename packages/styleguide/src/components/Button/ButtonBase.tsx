import React, { forwardRef } from 'react';
import type { ButtonHTMLAttributes } from 'react';

import { mergeClasses } from '../../helpers/mergeClasses';

export type ButtonBaseProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  testID?: string;
};

export const ButtonBase = forwardRef<HTMLButtonElement, ButtonBaseProps>(
  ({ children, testID, className, onClick, type = 'button', disabled = false, ...rest }, ref) => {
    return (
      <button
        className={mergeClasses('flex cursor-pointer', className)}
        data-testid={testID}
        disabled={disabled}
        ref={ref}
        type={type}
        onClick={disabled ? undefined : onClick}
        {...rest}>
        {children}
      </button>
    );
  }
);

ButtonBase.displayName = 'ButtonBase';
