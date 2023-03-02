import * as StyleguideIcons from '@expo/styleguide-icons';
import { createElement } from 'react';
import { twMerge } from 'tailwind-merge';

import { H1 } from '@/components/headers';
import useCopy from '@/hooks/useCopy';

type IconNames = keyof typeof StyleguideIcons;

export default function Icons() {
  const [, copy] = useCopy();
  const iconNames = Object.keys(StyleguideIcons).filter((key) => key.endsWith('Icon')) as IconNames[];
  return (
    <>
      <H1>Icons</H1>
      <div className="mt-8 grid grid-cols-1 gap-2 large:grid-cols-6 medium:grid-cols-4 small:grid-cols-3 ">
        {iconNames.map((iconName) => (
          <div
            className={twMerge(
              'flex flex-col items-center justify-center py-4 px-2 gap-1 border border-transparent rounded-md transition',
              'hocus:border-secondary hocus:shadow-xs hover:cursor-pointer',
              'active:scale-98'
            )}
            onClick={() => copy(iconName)}
            key={iconName}>
            {createElement(StyleguideIcons[iconName], { className: 'icon-xl' })}
            <span className="text-2xs text-tertiary">{iconName}</span>
          </div>
        ))}
      </div>
    </>
  );
}
