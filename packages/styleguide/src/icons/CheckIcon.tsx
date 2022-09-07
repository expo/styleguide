import React from "react";
import { IconProps } from "../types";
export function CheckIcon(props: IconProps) {
  const { title = "Check-icon", size, color, width, height, titleId } = props;
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
        d="M16.667 5L7.5 14.167 3.333 10"
        stroke={color || "var(--expo-theme-icon-default)"}
        strokeWidth={2.051}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
