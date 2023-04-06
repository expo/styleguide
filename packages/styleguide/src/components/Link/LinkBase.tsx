import Link from 'next/link';
import React, { forwardRef } from 'react';
import type { AnchorHTMLAttributes } from 'react';

export type LinkBaseProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  testID?: string;
  openInNewTab?: boolean;
  disabled?: boolean;
};

export const LinkBase = forwardRef<HTMLAnchorElement, LinkBaseProps>(
  ({ children, testID, href, openInNewTab, onClick, target, disabled, rel, ...rest }, ref) => {
    if (disabled) {
      return (
        <a ref={ref} data-testid={testID} {...rest}>
          {children}
        </a>
      );
    }

    if (!href || href.startsWith('#')) {
      return (
        <a href={href} ref={ref} onClick={onClick} data-testid={testID} {...rest}>
          {children}
        </a>
      );
    }

    return (
      <Link
        href={href}
        ref={ref}
        onClick={onClick}
        target={openInNewTab ? '_blank' : target}
        rel={openInNewTab ? 'noopener noreferrer' : rel}
        data-testid={testID}
        {...rest}>
        {children}
      </Link>
    );
  }
);

LinkBase.displayName = 'LinkBase';
