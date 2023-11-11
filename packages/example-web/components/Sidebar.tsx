import { Button, useTheme, Themes } from '@expo/styleguide';
import { ThemeIcon } from '@expo/styleguide-icons';
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
    <div className="sticky top-8 h-min">
      <Link href="/" className="block mb-4">
        <Image src="/icon.png" width="72" height="72" alt="Expo Styleguide Logo" />
      </Link>
      <CommandMenuTrigger setOpen={setOpen} className="flex w-[180px] mb-3" />
      <SidebarLink href="/colors" text="Colors" />
      <SidebarLink href="/typography" text="Typography" />
      <SidebarLink href="/icons" text="Icons" />
      <p className="heading-xl font-medium select-none">UI</p>
      <SidebarLink size="sm" href="/ui/components" text="Components" />
      <SidebarLink size="sm" href="/ui/search" text="Search" />
      <Button className="mt-4 fixed bottom-8" theme="secondary" leftSlot={<ThemeIcon />} onClick={toggleTheme}>
        Toggle theme
      </Button>
    </div>
  );
}
