import React from "react";
import { IconProps } from "../types";
export function RefreshIcon(props: IconProps) {
  const { title = "Refresh-icon", size, color, width, height, titleId } = props;
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
        d="M17.143 9.524v-.762a4 4 0 00-4-4H6.667"
        stroke={color || "var(--expo-theme-icon-default)"}
        strokeWidth={2}
        strokeLinecap="round"
      />
      <path
        d="M7.619 9.524V0L0 4.535l7.619 4.989z"
        fill={color || "var(--expo-theme-icon-default)"}
      />
      <path
        d="M2.857 10.476v.762a4 4 0 004 4h6.476"
        stroke={color || "var(--expo-theme-icon-default)"}
        strokeWidth={2}
        strokeLinecap="round"
      />
      <path
        d="M12.381 10.476V20L20 15.465l-7.619-4.989z"
        fill={color || "var(--expo-theme-icon-default)"}
      />
    </svg>
  );
}
