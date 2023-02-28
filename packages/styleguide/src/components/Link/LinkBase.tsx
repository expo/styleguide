import React, { forwardRef } from "react";
import type { AnchorHTMLAttributes } from "react";

export type LinkBaseProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  testID?: string;
  openInNewTab?: boolean;
  disabled?: boolean;
};

export const LinkBase = forwardRef<HTMLAnchorElement, LinkBaseProps>(
  ({ children, testID, className, href, openInNewTab, target, disabled, rel, ...rest }, ref) => {
    if (!href) return null;
    return (
      <a
        ref={ref}
        href={disabled ? undefined : href}
        className={className}
        target={openInNewTab ? '_blank' : target}
        rel={openInNewTab ? 'noopener noreferrer' : rel}
        data-testid={testID}
        {...rest}
      >
        {children}
      </a>
    )
  }
);