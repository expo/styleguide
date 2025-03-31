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
        'sticky top-8 z-10 h-min',
        'max-sm-gutters:top-0 max-sm-gutters:-m-8 max-sm-gutters:border-b max-sm-gutters:border-b-secondary max-sm-gutters:bg-default max-sm-gutters:p-8'
      )}>
      <div
        className={mergeClasses(
          'flex flex-col gap-5',
          'max-sm-gutters:mb-5 max-sm-gutters:flex-row max-sm-gutters:items-center'
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
            'mb-3 flex w-[180px]',
            'max-md-gutters:w-[132px]',
            'max-sm-gutters:mb-0 max-sm-gutters:w-full'
          )}
        />
        <Button
          className="hidden h-10 min-w-[40px] max-sm-gutters:flex"
          theme="secondary"
          leftSlot={<ThemeIcon />}
          onClick={toggleTheme}
        />
      </div>
      <SidebarLink href="/colors" text="Colors" />
      <SidebarLink href="/typography" text="Typography" />
      <SidebarLink href="/icons" text="Icons" />
      <SidebarLink href="/layouts" text="Layouts" />
      <p className="select-none font-medium heading-xl">UI</p>
      <SidebarLink size="sm" href="/ui/components" text="Components" />
      <SidebarLink size="sm" href="/ui/search" text="Search" />
      <Button
        className="fixed bottom-8 mt-4 max-sm-gutters:hidden"
        theme="secondary"
        leftSlot={<ThemeIcon />}
        onClick={toggleTheme}>
        Toggle theme
      </Button>
    </div>
  );
}
