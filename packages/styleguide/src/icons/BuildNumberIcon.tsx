import React from "react";
import { IconProps } from "../types";
export function BuildNumberIcon(props: IconProps) {
  const {
    title = "Build-number-icon",
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 0a4 4 0 00-4 4v12c0 .45.074.882.21 1.285l5.225-5.224a5.002 5.002 0 016.62-6.62L8.92 8.576l-.009.008a.834.834 0 000 1.167l1.334 1.334a.834.834 0 001.167 0l3.143-3.143a5.002 5.002 0 01-6.62 6.62L2.71 19.788A4.02 4.02 0 004 20h12a4 4 0 004-4V4a4 4 0 00-4-4H4z"
        fill={color || "var(--expo-theme-icon-default)"}
      />
    </svg>
  );
}
