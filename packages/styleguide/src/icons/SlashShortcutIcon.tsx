import React from "react";
import { IconProps } from "../types";
export function SlashShortcutIcon(props: IconProps) {
  const {
    title = "Slash-shortcut-icon",
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
        d="M16 .5H4A3.5 3.5 0 00.5 4v12A3.5 3.5 0 004 19.5h12a3.5 3.5 0 003.5-3.5V4A3.5 3.5 0 0016 .5zM6.5 16l7-12"
        stroke={color || "var(--expo-theme-icon-default)"}
      />
    </svg>
  );
}
