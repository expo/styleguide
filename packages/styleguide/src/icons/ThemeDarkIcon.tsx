import React from "react";
import { IconProps } from "../types";
export function ThemeDarkIcon(props: IconProps) {
  const {
    title = "Theme-dark-icon",
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
        d="M9.157 0a10.056 10.056 0 00-3.285 1.199C1.054 3.98-.598 10.142 2.185 14.96c2.782 4.819 8.943 6.47 13.762 3.688a10.048 10.048 0 002.86-2.466A10.079 10.079 0 018.33 11.297 10.078 10.078 0 019.157 0z"
        fill={color || "var(--expo-theme-icon-default)"}
      />
    </svg>
  );
}
