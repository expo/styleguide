import Link from "next/link";
import { useRouter } from "next/router";
import { twMerge } from "tailwind-merge";

type Props = {
  href: string;
  text: string;
}

export function SidebarLink({ href, text }: Props) {
  const { pathname } = useRouter();
  return (
    <Link href={href} className={twMerge(
      "heading-xl font-medium flex items-center gap-2 transition-colors hover:underline",
      pathname === href && "text-link"
    )}>
      <span>{text}</span>
    </Link>
  )
}