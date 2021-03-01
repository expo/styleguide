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
      viewBox="0 0 20 20"
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
        d="M16.993 6.667H3.227l6.883 6.883 6.883-6.883z"
        fill={color || "var(--expo-color-theme-icon-default)"}
      />
    </svg>
  );
}
