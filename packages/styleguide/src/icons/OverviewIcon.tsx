import React from "react";
import { IconProps } from "../types";
export function OverviewIcon(props: IconProps) {
  const {
    title = "Overview-icon",
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
      width={size || width || "20px"}
      height={size || height || "20px"}
      role="img"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M1 .875h6.75c.069 0 .125.056.125.125v6.75a.125.125 0 01-.125.125H1a.125.125 0 01-.125-.125V1C.875.931.931.875 1 .875zm0 11.25h6.75c.069 0 .125.056.125.125V19a.125.125 0 01-.125.125H1A.125.125 0 01.875 19v-6.75c0-.069.056-.125.125-.125zm11.25 0H19c.069 0 .125.056.125.125V19a.125.125 0 01-.125.125h-6.75a.125.125 0 01-.125-.125v-6.75c0-.069.056-.125.125-.125zm0-11.25H19c.069 0 .125.056.125.125v6.75a.125.125 0 01-.125.125h-6.75a.125.125 0 01-.125-.125V1c0-.069.056-.125.125-.125z"
        stroke={color || "var(--expo-theme-icon-default)"}
        strokeWidth={1.75}
      />
    </svg>
  );
}
