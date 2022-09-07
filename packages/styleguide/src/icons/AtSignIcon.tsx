import React from "react";
import { IconProps } from "../types";
export function AtSignIcon(props: IconProps) {
  const { title = "At-sign-icon", size, color, width, height, titleId } = props;
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
        d="M13.333 6.667v4.166a2.5 2.5 0 105 0V10a8.333 8.333 0 10-3.266 6.617M13.333 10a3.333 3.333 0 11-6.666 0 3.333 3.333 0 016.666 0z"
        stroke={color || "var(--expo-theme-icon-default)"}
        strokeWidth={1.85}
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
}
