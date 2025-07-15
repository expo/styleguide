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
        'hocus:bg-hover dark:hocus:bg-element',
        'active:!scale-[0.975]',
        'max-md-gutters:w-1/2 max-md-gutters:justify-center',
        isActive && 'mode-tab',
        isActive && 'bg-gradient-to-b from-palette-gray11 to-palette-black text-palette-white',
        isActive && 'dark:from-palette-gray12 dark:to-palette-white dark:text-palette-black'
      )}>
      {label}
    </div>
  );
}
