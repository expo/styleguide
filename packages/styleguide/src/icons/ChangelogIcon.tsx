import React from "react";
import { IconProps } from "../types";
export function ChangelogIcon(props: IconProps) {
  const {
    title = "Changelog-icon",
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
        d="M2.5 12.857h15m-15 4.286h15"
        stroke={color || "var(--expo-theme-icon-default)"}
        strokeWidth={2.143}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.071 2.857H3.93c-.79 0-1.429.64-1.429 1.429v2.857c0 .789.64 1.428 1.429 1.428h12.14c.79 0 1.429-.64 1.429-1.428V4.286c0-.79-.64-1.429-1.429-1.429z"
        stroke={color || "var(--expo-theme-icon-default)"}
        strokeWidth={2.143}
      />
    </svg>
  );
}
