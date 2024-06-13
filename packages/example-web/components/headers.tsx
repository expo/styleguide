import { mergeClasses } from '@expo/styleguide';
import { HTMLAttributes } from 'react';

export function H1({ children, className, ...rest }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={mergeClasses(
        'heading-5xl font-black truncate',
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
        'heading-3xl font-bold mt-10 mb-4 scroll-mt-5 truncate',
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
        'heading-lg font-semibold scroll-mt-5 mb-4 truncate',
        'max-md-gutters:heading-2xl',
        'max-sm-gutters:heading-xl',
        className
      )}
      {...rest}>
      {children}
    </h4>
  );
}
