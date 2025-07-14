import { mergeClasses } from '@expo/styleguide';
import React from 'react';

type Props = {
  label: string;
  isActive: boolean;
  onClick: () => void;
};

export function ModeTab({ label, isActive, onClick }: Props) {
  return (
    <div
      onClick={onClick}
      className={mergeClasses(
        'flex items-center text-xs px-2.5 rounded-md h-full cursor-pointer transition text-tertiary whitespace-nowrap select-none min-h-8',
        'hocus:bg-hover',
        'max-md-gutters:w-1/2 max-md-gutters:justify-center',
        isActive &&
          'bg-palette-black text-palette-white dark:bg-palette-white dark:text-palette-black hocus:bg-palette-gray12'
      )}>
      {label}
    </div>
  );
}
