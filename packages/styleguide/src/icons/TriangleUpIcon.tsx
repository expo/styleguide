import React from "react";
import { IconProps } from "../types";
export function TriangleUpIcon(props: IconProps) {
  const {
    title = "Triangle-up-icon",
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
        d="M3.117 12.563h13.766L10 5.68l-6.883 6.883z"
        fill={color || "var(--expo-theme-icon-default)"}
      />
    </svg>
  );
}
