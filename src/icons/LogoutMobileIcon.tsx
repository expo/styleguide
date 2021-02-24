import React from "react";
import { IconProps } from "../../types";
export default function LogoutMobileIcon(props: IconProps) {
  const {
    title = "Logout-mobile-icon",
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
        d="M17.205 5.863v-.031a2 2 0 00-2-2h-8.26a2 2 0 00-2 2v12.336a2 2 0 002 2h8.42a1.84 1.84 0 001.84-1.84v0"
        stroke={color || "var(--expo-color-theme-icon-default)"}
        strokeWidth={2}
      />
      <path
        d="M16.193 17.123v-3.106c-2.776 0-4.735 1.087-5.71 1.92-.18.153-.485.026-.467-.208.356-4.58 4.206-5.809 6.177-5.838V6.877l6.863 5.193-6.863 5.053z"
        fill={color || "var(--expo-color-theme-icon-default)"}
      />
    </svg>
  );
}
