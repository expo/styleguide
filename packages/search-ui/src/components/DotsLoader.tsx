import { mergeClasses } from '@expo/styleguide';
import React from 'react';

type Props = {
  className?: string;
};

export function DotsLoader({ className }: Props) {
  return (
    <span className={mergeClasses(`dots-loader inline-flex`, className)}>
      {Array.from({ length: 3 }).map((_, i) => (
        <span key={i} className="opacity-0" style={{ animationDelay: `${i * 0.2}s` }}>
          .
        </span>
      ))}
    </span>
  );
}
