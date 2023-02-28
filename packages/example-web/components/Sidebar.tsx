import Link from "next/link";
import Image from "next/image";
import { SidebarLink } from "@/components/SidebarLink";
import { Button, useTheme, Themes } from "@expo/styleguide";
import { ThemeIcon } from "@expo/styleguide-icons";

export function Sidebar() {
  const { themeName, setDarkMode, setLightMode } = useTheme();

  function toggleTheme() {
    if (themeName === Themes.AUTO || themeName === Themes.LIGHT) {
      setDarkMode();
    } else {
      setLightMode();
    }
  }

  return (
    <div className="fixed w-[240px]">
      <Link href="/" className="inline-block mb-4">
        <Image src="/icon.png" width="72" height="72" alt="Styleguide logo" />
      </Link>
      <SidebarLink href="/colors" text="Colors" />
      <SidebarLink href="/typography" text="Typography" />
      <SidebarLink href="/icons" text="Icons" />
      <SidebarLink href="/ui" text="UI" />
      <Button className="mt-4 fixed bottom-8" theme="secondary" leftSlot={<ThemeIcon />} onClick={toggleTheme}>
        Toggle theme
      </Button>
    </div>
  )
}