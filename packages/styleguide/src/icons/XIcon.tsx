import React from "react";
import { IconProps } from "../types";
export default function XIcon(props: IconProps) {
  const { title = "X-icon", size, color, width, height, titleId } = props;
  return (
    <svg
      width={size || width || "20px"}
      height={size || height || "20px"}
      viewBox="0 0 20 20"
      fill="none"
      role="img"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M15 5L5 15M5 5l10 10"
        stroke={color || "var(--expo-theme-icon-default)"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
