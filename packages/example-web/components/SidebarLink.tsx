import Link from "next/link";
import { Icon } from "@expo/styleguide";
import { useRouter } from "next/router";

type Props = {
  href: string;
  text: string;
}

export function SidebarLink({ href, text }: Props) {
  const { pathname } = useRouter();
  return (
    <Link href={href} className={`text-heading-xl font-medium flex items-center gap-2 hover:underline ${pathname === href && "text-link"}`}>
      <span>{text}</span>
      <Icon name="ArrowRightIcon" className="icon-md text-icon-secondary" />
    </Link>
  )
}