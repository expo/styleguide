import React from "react";
import { IconProps } from "../types";
export function OrganizationIcon(props: IconProps) {
  const {
    title = "Organization-icon",
    size,
    color,
    width,
    height,
    titleId,
  } = props;
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      width={size || width || "20px"}
      height={size || height || "20px"}
      role="img"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M3.199 7.163H2a2 2 0 00-2 2V20h3.198V7.163zm13.603 0H18a2 2 0 012 2V20h-3.198V7.163z"
        fill={color || "var(--expo-theme-icon-default)"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.21 2a2 2 0 012-2h7.58a2 2 0 012 2v18H4.21V2zm2.656 1.44h2.255v2.25H6.866V3.44zm6.28 0h-2.255v2.25h2.255V3.44zm-2.255 3.723h2.255v2.25h-2.255v-2.25zm-1.783 0H6.854v2.25h2.254v-2.25zm1.783 3.722h2.255v2.25h-2.255v-2.25zm-1.783 0H6.854v2.25h2.254v-2.25z"
        fill={color || "var(--expo-theme-icon-default)"}
      />
    </svg>
  );
}
