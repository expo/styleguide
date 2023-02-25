import React, { forwardRef } from "react";
import type { AnchorHTMLAttributes, PropsWithChildren } from "react";

export type LinkBaseProps = AnchorHTMLAttributes<HTMLAnchorElement> & PropsWithChildren<{
  className?: string;
  testID?: string;
  openInNewTab?: boolean;
}>;

export const LinkBase = forwardRef<HTMLAnchorElement, LinkBaseProps>(
  ({ children, testID, className, href, openInNewTab, target, rel, ...rest }, ref) => {
    if (!href) return null;
    return (
      <a
        ref={ref}
        href={href}
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