import React from "react";
import { IconProps } from "../../types";
export default function TriangleDownIcon(props: IconProps) {
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
        d="M20.392 8H3.872l8.26 8.26L20.392 8z"
        fill={color || "var(--expo-color-theme-icon-default)"}
      />
    </svg>
  );
}
