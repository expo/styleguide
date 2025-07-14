import { mergeClasses } from '@expo/styleguide';
import React from 'react';

type Props = { isLoading?: boolean; className?: string };

export const BarLoader = ({ isLoading, className }: Props) => (
  <div
    role="progressbar"
    className={mergeClasses(
      'bg-palette-blue9 h-0.5 absolute z-20',
      isLoading && 'animate-[searchUIBarLoader_2s_infinite_ease-in-out]',
      className
    )}
  />
);
