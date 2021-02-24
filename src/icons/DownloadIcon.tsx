import React from "react";
import { IconProps } from "../../types";
export default function DownloadIcon(props: IconProps) {
  const {
    title = "Download-icon",
    size,
    color,
    width,
    height,
    titleId,
  } = props;
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
      <path
        d="M17 12H7l5 8 5-8z"
        fill={color || "var(--expo-color-theme-icon-default)"}
      />
      <path
        d="M3 22h18m-9-10V2"
        stroke={color || "var(--expo-color-theme-icon-default)"}
        strokeWidth={2}
        strokeLinecap="round"
      />
    </svg>
  );
}
