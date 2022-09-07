import React from "react";
import { IconProps } from "../types";
export function ChartIcon(props: IconProps) {
  const { title = "Chart-icon", size, color, width, height, titleId } = props;
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
        d="M18.928 18.887H1.072V1.147"
        stroke={color || "var(--expo-theme-icon-default)"}
        strokeWidth={2}
        strokeLinecap="round"
      />
      <path
        d="M4.477 12.993L9.22 7.007l4.329 5.763 4.565-5.763"
        stroke={color || "var(--expo-theme-icon-default)"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
