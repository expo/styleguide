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
        'mb-4 mt-10 scroll-mt-5 truncate font-bold heading-3xl',
        'max-md-gutters:heading-2xl',
        'max-sm-gutters:heading-xl',
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
        'max-md-gutters:heading-2xl',
        'max-sm-gutters:heading-xl',
        className
      )}
      {...rest}>
      {children}
    </h4>
  );
}
