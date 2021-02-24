import React from "react";
import { IconProps } from "../../types";
export default function OneTimePasswordIcon(props: IconProps) {
  const {
    title = "One-time-password-icon",
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
        d="M16.435 16.733v2.534a2.267 2.267 0 01-2.266 2.266H6.235a2.267 2.267 0 01-2.266-2.266v-13.6A2.267 2.267 0 016.235 3.4h7.934a2.267 2.267 0 012.266 2.267V8.2"
        stroke={color || "var(--expo-color-theme-icon-default)"}
        strokeWidth={2}
      />
      <rect
        width={6}
        height={3}
        rx={1}
        transform="matrix(-1 0 0 1 12.969 2.467)"
        fill={color || "var(--expo-color-theme-icon-default)"}
      />
      <path
        d="M8.777 14.533h1.148L9.81 13.27l1.047.732.574-1.004-1.147-.531 1.147-.531-.573-1.005-1.048.732.115-1.262H8.777l.115 1.262-1.048-.732-.574 1.005 1.148.53-1.148.532.574 1.004 1.048-.732-.115 1.263zm5.24 0h1.148l-.115-1.263 1.047.732.574-1.004-1.148-.531 1.148-.531-.574-1.005-1.047.732.114-1.262h-1.147l.114 1.262-1.047-.732-.574 1.005 1.148.53-1.148.532.574 1.004 1.047-.732-.114 1.263zm5.36 0h1.148l-.115-1.263 1.047.732.574-1.004-1.147-.531 1.147-.531-.573-1.005-1.048.732.115-1.262h-1.148l.115 1.262-1.048-.732-.573 1.005 1.147.53-1.148.532.574 1.004 1.048-.732-.115 1.263z"
        fill={color || "var(--expo-color-theme-icon-default)"}
      />
    </svg>
  );
}
