import React from "react";
import { IconProps } from "../../types";
export default function SearchIcon(props: IconProps) {
  const { title = "Search-icon", size, color, width, height, titleId } = props;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={size || width || "20px"}
      height={size || height || "20px"}
      role="img"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <circle
        cx={10.5}
        cy={10}
        r={6.5}
        stroke={color || "var(--expo-color-theme-icon-default)"}
        strokeWidth={2}
      />
      <path
        d="M15 15.5l5 5"
        stroke={color || "var(--expo-color-theme-icon-default)"}
        strokeWidth={2}
        strokeLinecap="round"
      />
    </svg>
  );
}
