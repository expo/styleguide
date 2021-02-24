import React from "react";
import { IconProps } from "../../types";
export default function UndoIcon(props: IconProps) {
  const { title = "Undo-icon", size, color, width, height, titleId } = props;
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
        d="M21 20v-8a4 4 0 00-4-4h-7"
        stroke={color || "var(--expo-color-theme-icon-default)"}
        strokeWidth={2}
        strokeLinecap="round"
      />
      <path
        d="M10 13V3L2 8l8 5z"
        fill={color || "var(--expo-color-theme-icon-default)"}
      />
    </svg>
  );
}
