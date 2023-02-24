import { Icon, IconNames } from "@expo/styleguide";
import * as StyleguideIcons from "@expo/styleguide-icons";

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
            <span className='text-2xs text-secondary'>{iconName}</span>
          </div>
        ))}
      </div>
    </>
  );
}
