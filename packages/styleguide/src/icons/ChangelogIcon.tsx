import React from "react";
import { IconProps } from "../types";
export function ChangelogIcon(props: IconProps) {
  const {
    title = "Arrow-up-icon",
    size,
    color,
    width,
    height,
    titleId,
  } = props;
  return (
    <svg
      fill="none"
      width={size || width || "20px"}
      height={size || height || "20px"}
      role="img"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}

      <path
        d="M2.5 12.8572H17.5"
        stroke={color || "var(--expo-theme-icon-default)"}
        stroke-width="2.14286"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M2.5 17.1429H17.5"
        stroke={color || "var(--expo-theme-icon-default)"}
        stroke-width="2.14286"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16.0713 2.85715H3.92857C3.13959 2.85715 2.5 3.49674 2.5 4.28572V7.14286C2.5 7.93184 3.13959 8.57143 3.92857 8.57143H16.0713C16.8603 8.57143 17.4999 7.93184 17.4999 7.14286V4.28572C17.4999 3.49674 16.8603 2.85715 16.0713 2.85715Z"
        stroke={color || "var(--expo-theme-icon-default)"}
        stroke-width="2.14286"
      />
    </svg>
  );
}
