import { mergeClasses } from '@expo/styleguide';
import { HTMLAttributes } from 'react';

export function H1({ children, className, ...rest }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1 className={mergeClasses('heading-5xl font-black', className)} {...rest}>
      {children}
    </h1>
  );
}

export function H3({ children, className, ...rest }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3 className={mergeClasses('heading-3xl font-bold mt-10 mb-4 scroll-mt-5', className)} {...rest}>
      {children}
    </h3>
  );
}
