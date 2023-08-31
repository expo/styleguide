import {
  Logo,
  DocsLogo,
  ExpoGoLogo,
  SnackLogo,
  WordMarkLogo,
  RouterLogo,
  OrbitLogo,
  mergeClasses,
  Button,
} from '@expo/styleguide';
import * as StyleguideIcons from '@expo/styleguide-icons';
import { CheckCircleIcon, PlaceholderIcon, SearchMdIcon } from '@expo/styleguide-icons';
import { createElement, useState } from 'react';

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
  const [filters, setFilters] = useState({ outline: true, solid: false, duotone: false });
  const [search, setSearch] = useState('');

  const iconNames = Object.keys(StyleguideIcons)
    .filter((key) => {
      let skip = false;
      if (!filters.solid) skip = skip || key.endsWith('SolidIcon');
      if (!filters.duotone) skip = skip || key.endsWith('DuotoneIcon');
      if (!filters.outline) skip = skip || (!key.endsWith('SolidIcon') && !key.endsWith('DuotoneIcon'));
      return !skip;
    })
    .filter((key) => (search ? key.toLowerCase().includes(search) : true))
    .filter((key) => key.endsWith('Icon')) as IconNames[];

  return (
    <div>
      <H1>Icons</H1>
      <H3>Logos</H3>
      <div className="mt-8 grid grid-cols-1 gap-2 xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 ">
        {[
          { name: 'WordMarkLogo', element: WordMarkLogo },
          { name: 'Logo', element: Logo },
          { name: 'DocsLogo', element: DocsLogo },
          { name: 'ExpoGoLogo', element: ExpoGoLogo },
          { name: 'OrbitLogo', element: OrbitLogo },
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
      <div className="flex items-center gap-4">
        <div className="relative">
          <SearchMdIcon className="icon-sm absolute top-[9px] left-2.5" />
          <input
            className="border border-default rounded-md bg-default shadow-none py-1 px-3 pl-8 box-border outline-palette-blue8"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div>
          <Button
            theme={filters.outline ? 'tertiary' : 'quaternary'}
            leftSlot={
              filters.outline ? <CheckCircleIcon className="icon-sm" /> : <PlaceholderIcon className="icon-sm" />
            }
            onClick={() => setFilters((prevState) => ({ ...prevState, outline: !prevState.outline }))}>
            Outline
          </Button>
          <Button
            theme={filters.solid ? 'tertiary' : 'quaternary'}
            leftSlot={filters.solid ? <CheckCircleIcon className="icon-sm" /> : <PlaceholderIcon className="icon-sm" />}
            onClick={() => setFilters((prevState) => ({ ...prevState, solid: !prevState.solid }))}>
            Solid
          </Button>
          <Button
            theme={filters.duotone ? 'tertiary' : 'quaternary'}
            leftSlot={
              filters.duotone ? <CheckCircleIcon className="icon-sm" /> : <PlaceholderIcon className="icon-sm" />
            }
            onClick={() => setFilters((prevState) => ({ ...prevState, duotone: !prevState.duotone }))}>
            Duotone
          </Button>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-2 xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 ">
        {iconNames.map((iconName) => (
          <div className={iconClasses} onClick={() => copy(iconName)} key={iconName}>
            {createElement(StyleguideIcons[iconName], { className: 'icon-xl text-default' })}
            <span className="text-2xs text-tertiary">{iconName}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
