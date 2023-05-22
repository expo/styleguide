import { Logo, DocsLogo, ExpoGoLogo, SnackLogo, WordMarkLogo, RouterLogo, mergeClasses } from '@expo/styleguide';
import * as StyleguideIcons from '@expo/styleguide-icons';
import { createElement } from 'react';

import { H1, H3 } from '@/components/headers';
import useCopy from '@/hooks/useCopy';

type IconNames = keyof typeof StyleguideIcons;

const iconClasses = mergeClasses(
  'flex flex-col items-center justify-center py-4 px-2 gap-1 border border-transparent rounded-md transition',
  'hocus:border-secondary hocus:shadow-xs hover:cursor-pointer',
  'active:scale-98'
);

export default function Icons() {
  const [, copy] = useCopy();
  const iconNames = Object.keys(StyleguideIcons).filter((key) => key.endsWith('Icon')) as IconNames[];
  return (
    <>
      <H1>Icons</H1>
      <H3>Logos</H3>
      <div className="mt-8 grid grid-cols-1 gap-2 xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 ">
        {[
          { name: 'WordMarkLogo', element: WordMarkLogo },
          { name: 'Logo', element: Logo },
          { name: 'DocsLogo', element: DocsLogo },
          { name: 'ExpoGoLogo', element: ExpoGoLogo },
          { name: 'RouterLogo', element: RouterLogo },
          { name: 'SnackLogo', element: SnackLogo },
        ].map((logo) => (
          <div className={iconClasses} onClick={() => copy(logo.name)} key={logo.name}>
            {createElement(logo.element, { className: 'icon-xl text-default' })}
            <span className="text-2xs text-tertiary">{logo.name}</span>
          </div>
        ))}
      </div>
      <H3>Icon set</H3>
      <div className="mt-8 grid grid-cols-1 gap-2 xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 ">
        {iconNames.map((iconName) => (
          <div className={iconClasses} onClick={() => copy(iconName)} key={iconName}>
            {createElement(StyleguideIcons[iconName], { className: 'icon-xl text-default' })}
            <span className="text-2xs text-tertiary">{iconName}</span>
          </div>
        ))}
      </div>
    </>
  );
}
