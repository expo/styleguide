import { mergeClasses } from '@expo/styleguide';
import { HTMLAttributes } from 'react';

export function H1({ children, className, ...rest }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={mergeClasses(
        'truncate font-black heading-5xl',
        'max-md-gutters:heading-4xl',
        'max-sm-gutters:heading-3xl',
        className
      )}
      {...rest}>
      {children}
    </h1>
  );
}

export function H3({ children, className, ...rest }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={mergeClasses(
        'mb-4 mt-8 scroll-mt-5 truncate font-semibold heading-2xl',
        'max-md-gutters:heading-xl',
        'max-sm-gutters:heading-lg',
        className
      )}
      {...rest}>
      {children}
    </h3>
  );
}

export function H4({ children, className, ...rest }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h4
      className={mergeClasses(
        'mb-4 scroll-mt-5 truncate font-semibold heading-lg',
        'max-md-gutters:heading-base',
        'max-sm-gutters:heading-sm',
        className
      )}
      {...rest}>
      {children}
    </h4>
  );
}
