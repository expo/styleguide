import * as StyleguideIcons from "@expo/styleguide-icons";
import { createElement } from "react";

import { H1 } from "@/components/headers";

type IconNames = keyof typeof StyleguideIcons;

export default function Icons() {
  const iconNames = Object.keys(StyleguideIcons).filter((key) => key.endsWith("Icon")) as IconNames[];
  return (
    <>
      <H1>Icons</H1>
      <div className='mt-8 grid grid-cols-1 gap-6 large:grid-cols-7 medium:grid-cols-4 small:grid-cols-3 '>
        {iconNames.map((iconName) => (
          <div
            className='flex flex-col items-center justify-center gap-2'
            key={iconName}
          >
            {createElement(StyleguideIcons[iconName], { className: 'icon-xl' })}
            <span className='text-2xs text-secondary'>{iconName}</span>
          </div>
        ))}
      </div>
    </>
  );
}
