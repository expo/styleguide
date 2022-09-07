import React from "react";
import { IconProps } from "../types";
export function TriangleDownIcon(props: IconProps) {
  const {
    title = "Triangle-down-icon",
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
        d="M16.883 7.43H3.117L10 14.313l6.883-6.883z"
        fill={color || "var(--expo-theme-icon-default)"}
      />
    </svg>
  );
}
