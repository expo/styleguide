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
import { CheckCircleIcon } from '@expo/styleguide-icons/outline/CheckCircleIcon';
import { PlaceholderIcon } from '@expo/styleguide-icons/outline/PlaceholderIcon';
import { SearchMdIcon } from '@expo/styleguide-icons/outline/SearchMdIcon';
import { createElement, useState } from 'react';

import * as StyleguideIcons from '@/common/icon-imports';
import { H1, H3 } from '@/components/headers';
import useCopy from '@/hooks/useCopy';

type IconNames = keyof typeof StyleguideIcons;

const iconClasses = mergeClasses(
  'flex flex-col items-center justify-center gap-1 rounded-md border border-transparent px-2 py-4 transition',
  'hover:cursor-pointer hocus:border-secondary hocus:shadow-xs',
  'active:scale-98'
);

export default function IconsPage() {
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
      <H3 id="logos">Logos</H3>
      <div className="mt-8 grid grid-cols-6 gap-2 max-lg-gutters:grid-cols-4 max-md-gutters:grid-cols-3 max-sm-gutters:grid-cols-1">
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
      <H3 id="set">Icon set</H3>
      <div className={mergeClasses('flex items-center gap-4', 'max-sm-gutters:flex-col max-sm-gutters:items-start')}>
        <div className="relative">
          <SearchMdIcon className="icon-sm absolute left-2.5 top-[9px]" />
          <input
            className="box-border rounded-md border border-default bg-default px-3 py-1 pl-8 shadow-none outline-palette-blue8"
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
      <div className="mt-8 grid grid-cols-6 gap-2 max-lg-gutters:grid-cols-4 max-md-gutters:grid-cols-3 max-sm-gutters:grid-cols-1">
        {iconNames.map((iconName) => (
          <div className={iconClasses} onClick={() => copy(iconName)} key={iconName}>
            {createElement(StyleguideIcons[iconName], { className: 'icon-xl text-default translate-z' })}
            <span className="text-2xs text-tertiary">{iconName}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
