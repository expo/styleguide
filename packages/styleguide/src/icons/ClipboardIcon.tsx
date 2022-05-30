import React from "react";
import { IconProps } from "../types";
export default function ClipboardIcon(props: IconProps) {
  const {
    title = "Clipboard-icon",
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
        d="M13.333 3.333H15A1.667 1.667 0 0116.667 5v11.667A1.666 1.666 0 0115 18.333H5a1.667 1.667 0 01-1.667-1.666V5A1.667 1.667 0 015 3.333h1.667"
        stroke={color || "var(--expo-theme-icon-default)"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.5 1.667h-5a.833.833 0 00-.833.833v1.667c0 .46.373.833.833.833h5c.46 0 .833-.373.833-.833V2.5a.833.833 0 00-.833-.833z"
        stroke={color || "var(--expo-theme-icon-default)"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
