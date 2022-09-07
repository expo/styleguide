import React from "react";
import { IconProps } from "../types";
export function SearchIcon(props: IconProps) {
  const { title = "Search-icon", size, color, width, height, titleId } = props;
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
        cx={8.386}
        cy={7.853}
        r={6.806}
        stroke={color || "var(--expo-theme-icon-default)"}
        strokeWidth={2.094}
      />
      <path
        d="M13.098 13.612l5.235 5.236"
        stroke={color || "var(--expo-theme-icon-default)"}
        strokeWidth={2.094}
        strokeLinecap="round"
      />
    </svg>
  );
}
