import React from "react";
import { IconProps } from "../types";
export function HomeFilledIcon(props: IconProps) {
  const {
    title = "Home-filled-icon",
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
        d="M1 6.5V19h6.632v-6.204a1.2 1.2 0 01.733-1.106 4.202 4.202 0 013.27 0 1.2 1.2 0 01.733 1.106V19H19V6.5L10 1 1 6.5z"
        fill={color || "var(--expo-theme-icon-default)"}
      />
    </svg>
  );
}
