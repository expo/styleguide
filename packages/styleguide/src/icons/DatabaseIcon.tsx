import React from "react";
import { IconProps } from "../types";
export function DatabaseIcon(props: IconProps) {
  const {
    title = "Database-icon",
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
        d="M10 6.667c4.142 0 7.5-1.12 7.5-2.5 0-1.381-3.358-2.5-7.5-2.5-4.142 0-7.5 1.119-7.5 2.5 0 1.38 3.358 2.5 7.5 2.5zM17.5 10c0 1.383-3.333 2.5-7.5 2.5S2.5 11.383 2.5 10"
        stroke={color || "var(--expo-theme-icon-default)"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 4.167v11.666c0 1.384 3.333 2.5 7.5 2.5s7.5-1.116 7.5-2.5V4.167"
        stroke={color || "var(--expo-theme-icon-default)"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}