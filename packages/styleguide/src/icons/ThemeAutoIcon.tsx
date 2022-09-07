import React from "react";
import { IconProps } from "../types";
export function ThemeAutoIcon(props: IconProps) {
  const {
    title = "Theme-auto-icon",
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
      <circle
        cx={10}
        cy={10}
        r={7.755}
        stroke={color || "var(--expo-theme-icon-default)"}
        strokeWidth={1.157}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 1.667a8.333 8.333 0 100 16.666V1.667z"
        fill={color || "var(--expo-theme-icon-default)"}
      />
    </svg>
  );
}
