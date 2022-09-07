import React from "react";
import { IconProps } from "../types";
export function TriangleRightIcon(props: IconProps) {
  const {
    title = "Triangle-right-icon",
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
        d="M7.43 3.117v13.766L14.313 10 7.43 3.117z"
        fill={color || "var(--expo-theme-icon-default)"}
      />
    </svg>
  );
}
