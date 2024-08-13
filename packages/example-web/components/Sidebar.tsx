import { Button, useTheme, Themes, mergeClasses } from '@expo/styleguide';
import { ThemeIcon } from '@expo/styleguide-icons/custom/ThemeIcon';
import { CommandMenuTrigger } from '@expo/styleguide-search-ui';
import Image from 'next/image';
import Link from 'next/link';

import { useSearchDialogContext } from '@/common/SearchDialogContext';
import { SidebarLink } from '@/components/SidebarLink';

export function Sidebar() {
  const { themeName, setDarkMode, setLightMode } = useTheme();
  const { setOpen } = useSearchDialogContext();

  function toggleTheme() {
    if (themeName === Themes.AUTO || themeName === Themes.LIGHT) {
      setDarkMode();
    } else {
      setLightMode();
    }
  }

  return (
    <div
      className={mergeClasses(
        'sticky top-8 h-min z-10',
        'max-sm-gutters:-m-8 max-sm-gutters:p-8 max-sm-gutters:top-0 max-sm-gutters:bg-default max-sm-gutters:border-b max-sm-gutters:border-b-secondary'
      )}>
      <div
        className={mergeClasses(
          'flex flex-col gap-5',
          'max-sm-gutters:items-center max-sm-gutters:flex-row max-sm-gutters:mb-5'
        )}>
        <Link href="/" className="animate-fadeIn">
          <Image src="/icon.png" width="72" height="72" alt="Expo Styleguide Logo" className="max-sm-gutters:hidden" />
          <Image
            src="/icon.png"
            width="40"
            height="40"
            alt="Expo Styleguide Logo"
            className="hidden min-w-[40px] max-sm-gutters:block"
          />
        </Link>
        <CommandMenuTrigger
          setOpen={setOpen}
          className={mergeClasses(
            'flex w-[180px] mb-3',
            'max-md-gutters:w-[132px]',
            'max-sm-gutters:mb-0 max-sm-gutters:w-full'
          )}
        />
        <Button
          className="hidden min-w-[40px] h-10 max-sm-gutters:flex"
          theme="secondary"
          leftSlot={<ThemeIcon />}
          onClick={toggleTheme}
        />
      </div>
      <SidebarLink href="/colors" text="Colors" />
      <SidebarLink href="/typography" text="Typography" />
      <SidebarLink href="/icons" text="Icons" />
      <p className="heading-xl font-medium select-none">UI</p>
      <SidebarLink size="sm" href="/ui/components" text="Components" />
      <SidebarLink size="sm" href="/ui/search" text="Search" />
      <Button
        className="mt-4 fixed bottom-8 max-sm-gutters:hidden"
        theme="secondary"
        leftSlot={<ThemeIcon />}
        onClick={toggleTheme}>
        Toggle theme
      </Button>
    </div>
  );
}
