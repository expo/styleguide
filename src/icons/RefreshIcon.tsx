import React from "react";
import { IconProps } from "../../types";
export default function RefreshIcon(props: IconProps) {
  const { title = "Refresh-icon", size, color, width, height, titleId } = props;
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
        d="M19.143 11.524v-.762a4 4 0 00-4-4H8.667"
        stroke={color || "var(--expo-color-theme-icon-default)"}
        strokeWidth={2}
        strokeLinecap="round"
      />
      <path
        d="M9.62 11.524V2L2 6.535l7.619 4.989z"
        fill={color || "var(--expo-color-theme-icon-default)"}
      />
      <path
        d="M4.857 12.476v.762a4 4 0 004 4h6.476"
        stroke={color || "var(--expo-color-theme-icon-default)"}
        strokeWidth={2}
        strokeLinecap="round"
      />
      <path
        d="M14.381 12.476V22L22 17.465l-7.619-4.989z"
        fill={color || "var(--expo-color-theme-icon-default)"}
      />
    </svg>
  );
}
