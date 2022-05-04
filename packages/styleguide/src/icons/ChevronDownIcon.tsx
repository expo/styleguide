import React from "react";
import { IconProps } from "../types";
export default function ChevronDownIcon(props: IconProps) {
  const {
    title = "Chevron-down-icon",
    size,
    color,
    width,
    height,
    titleId,
  } = props;
  return (
    <svg
      width={size || width || "20px"}
      height={size || height || "20px"}
      viewBox="0 0 24 24"
      fill="none"
      role="img"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M6 9l6 6 6-6"
        stroke={color || "var(--expo-theme-icon-default)"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
