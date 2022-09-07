import React from "react";
import { IconProps } from "../types";
export function ThemeIcon(props: IconProps) {
  const { title = "Theme-icon", size, color, width, height, titleId } = props;
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 16a4 4 0 01-4 4H4a4 4 0 01-4-4V4a4 4 0 014-4h12a4 4 0 014 4v12zM2.603 17.43L17.415 2.587A1.994 1.994 0 0016 2H4a2 2 0 00-2 2v12c0 .56.23 1.068.603 1.43z"
        fill={color || "var(--expo-theme-icon-default)"}
      />
    </svg>
  );
}
