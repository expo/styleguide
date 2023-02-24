import * as StyleguideIcons from "@expo/styleguide-icons";

import { Icon, IconNames } from "@/components/Icon";

export default function Icons() {
  const iconNames = Object.keys(StyleguideIcons).filter((key) => key.endsWith("Icon")) as IconNames[];
  return (
    <>
      <h1 className='text-heading-5xl font-black'>Icons</h1>
      <div className='mt-8 grid grid-cols-1 gap-6 large:grid-cols-7 medium:grid-cols-4 small:grid-cols-3 '>
        {iconNames.map((iconName) => (
            <div
              className='flex flex-col items-center justify-center gap-2'
              key={iconName}
            >
              <Icon name={iconName} className="icon-xl text-default" />
              <span className='text-xs text-secondary'>{iconName}</span>
            </div>
          )
        )}
      </div>
    </>
  );
}
