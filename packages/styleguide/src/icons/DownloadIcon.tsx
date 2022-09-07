import React from "react";
import { IconProps } from "../types";
export function DownloadIcon(props: IconProps) {
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
      viewBox="0 0 20 22"
      fill="none"
      width={size || width || "20px"}
      height={size || height || "20px"}
      role="img"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M14.583 11H5.417L10 18.333 14.583 11z"
        fill={color || "var(--expo-theme-icon-default)"}
      />
      <path
        d="M1.75 20.167h16.5M10 11V1.833"
        stroke={color || "var(--expo-theme-icon-default)"}
        strokeWidth={1.833}
        strokeLinecap="round"
      />
    </svg>
  );
}
