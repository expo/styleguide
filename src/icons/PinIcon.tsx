import React from "react";
import { IconProps } from "../../types";
export default function PinIcon(props: IconProps) {
  const { title = "Pin-icon", size, color, width, height, titleId } = props;
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
        d="M5.938 8.5a2 2 0 012.732-.732l8.66 5a2 2 0 01.732 2.732l-1.5 2.598-12.124-7 1.5-2.598z"
        fill={color || "var(--expo-color-theme-icon-default)"}
      />
      <rect
        x={12.67}
        y={0.84}
        width={10}
        height={13}
        rx={2}
        transform="rotate(30 12.67 .84)"
        fill={color || "var(--expo-color-theme-icon-default)"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.634 19.294l3-5.196 1.732 1-3 5.196L7 20.66l-.366-1.366z"
        fill={color || "var(--expo-color-theme-icon-default)"}
      />
    </svg>
  );
}
