import { mergeClasses } from '@expo/styleguide';
import React from 'react';

type Props = { isLoading?: boolean };

export const BarLoader = ({ isLoading }: Props) => (
  <div
    className={mergeClasses(
      'bg-palette-blue9 h-0.5 absolute mt-[11px] left-px',
      isLoading && 'animate-[searchUIBarLoader_2s_infinite_ease-in-out]'
    )}
  />
);
