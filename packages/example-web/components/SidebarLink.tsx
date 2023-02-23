import Link from "next/link";
import { Icon } from "@/components/Icon";
import { theme } from "@expo/styleguide";
import { useRouter } from "next/router";

type Props = {
  href: string;
  text: string;
}

export function SidebarLink({ href, text }: Props) {
  const { pathname } = useRouter();
  return (
    <Link href={href} className={`text-heading-xl font-medium flex items-center gap-2 hover:underline ${pathname === href && "text-palette-blue11"}`}>
      <span>{text}</span>
      <Icon name="ArrowRightIcon" color={theme.icon.secondary} />
    </Link>
  )
}