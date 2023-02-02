import Link from "next/link";
import { ArrowRightIcon, iconSize } from "@expo/styleguide";
import React from "react";

export default function Navigation() {
  return (
    <nav>
      <Link href="/colors" className={linkStyle}>
        <span>Colors</span>
        <ArrowRightIcon size={iconSize.lg} />
      </Link>
      <Link href="/typography" className={linkStyle}>
        <span>Typography</span>
        <ArrowRightIcon size={iconSize.lg} />
      </Link>
      <Link href="/icons" className={linkStyle}>
        <span>Icons</span>
        <ArrowRightIcon size={iconSize.lg} />
      </Link>
      <Link href="/buttons" className={linkStyle}>
        <span>Buttons</span>
        <ArrowRightIcon size={iconSize.lg} />
      </Link>
    </nav>
  );
}

const linkStyle = "text-heading-xl font-medium flex items-center gap-2 hover:underline";
