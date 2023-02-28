import * as UI from '@expo/styleguide-icons';

import { Icon, StyleguideIconNames } from '@/components/Icon';

export default function Icons() {
  const iconNames = Object.keys(UI).filter((key) =>
    key.endsWith('Icon')
  ) as StyleguideIconNames[];
  return (
    <>
      <h1 className="text-heading-5xl font-black">Icons</h1>
      <div className="mt-8 grid grid-cols-1 gap-6 2xl:grid-cols-8 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 ">
        {iconNames.map((iconName) => (
          <div
            className="flex flex-col items-center justify-center gap-2"
            key={iconName}
          >
            <Icon name={iconName} color="currentColor" />
            <span className="text-xs text-secondary">{iconName}</span>
          </div>
        ))}
      </div>
    </>
  );
}
