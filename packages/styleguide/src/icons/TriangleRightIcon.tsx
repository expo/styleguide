import React from "react";
import { IconProps } from "../../types";
export default function TriangleRightIcon(props: IconProps) {
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
      width={size || width || "20px"}
      height={size || height || "20px"}
      viewBox="0 0 20 20"
      fill="none"
      role="img"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M6.667 3.227v13.766l6.883-6.883-6.883-6.883z"
        fill={color || "var(--expo-theme-icon-default)"}
      />
    </svg>
  );
}
