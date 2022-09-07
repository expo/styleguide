import React from "react";
import { IconProps } from "../types";
export function TriangleLeftIcon(props: IconProps) {
  const {
    title = "Triangle-left-icon",
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
        d="M12.567 16.883V3.117L5.684 10l6.883 6.883z"
        fill={color || "var(--expo-theme-icon-default)"}
      />
    </svg>
  );
}
