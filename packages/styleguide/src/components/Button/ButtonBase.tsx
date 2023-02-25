import React, { forwardRef } from 'react';
import type { DOMAttributes, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge'

export type ButtonBaseProps = DOMAttributes<HTMLButtonElement> & PropsWithChildren<{
  className?: string;
  testID?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}>;

export const ButtonBase = forwardRef<HTMLButtonElement, ButtonBaseProps>(
  ({ children, testID, className, onClick, type = 'button', disabled = false, ...rest }, ref) => {
    return (
      <button
        className={twMerge("flex text-left border-0, p-0 cursor-pointer", className)}
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