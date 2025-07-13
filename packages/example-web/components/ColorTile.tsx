import { mergeClasses } from '@expo/styleguide';
import { PropsWithChildren } from 'react';

import useCopy from '@/hooks/useCopy';

type Props = PropsWithChildren<{
  className: string;
  label?: string;
}>;

export function ColorTile({ children, className, label = className.split('-').at(-1) }: Props) {
  const [, copy] = useCopy();

  return (
    <div>
      <div
        className={mergeClasses(
          'mb-1 h-16 w-16 transition',
          'hover:shadow-xl hocus:scale-110 hocus:cursor-pointer',
          'active:!scale-105',
          className
        )}
        onClick={() => copy(className)}>
        {children}
      </div>
      <p className="text-center text-3xs text-secondary">{label}</p>
    </div>
  );
}
