import React from "react";
import { IconProps } from "../types";
export function UpdateIcon(props: IconProps) {
  const { title = "Update-icon", size, color, width, height, titleId } = props;
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
        d="M3.415 10L10 13.293 16.585 10l3.398 1.699L10 16.69.017 11.7 3.415 10z"
        fill={color || "var(--expo-theme-icon-default)"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 4.651l-7.3 3.65 7.3 3.65 7.3-3.65-7.3-3.65zm0-1.341l9.983 4.99L10 13.293.017 8.3 10 3.31z"
        fill={color || "var(--expo-theme-icon-default)"}
      />
    </svg>
  );
}
