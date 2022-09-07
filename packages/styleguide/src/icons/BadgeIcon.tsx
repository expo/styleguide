import React from "react";
import { IconProps } from "../types";
export function BadgeIcon(props: IconProps) {
  const { title = "Badge-icon", size, color, width, height, titleId } = props;
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
        d="M10 1a.91.91 0 00-.91.91v3.635a.91.91 0 101.82 0V1.91A.91.91 0 0010 1z"
        fill={color || "var(--expo-theme-icon-default)"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.818 3.727h6.364c1.004 0 1.818.814 1.818 1.818v11.819a1.818 1.818 0 01-1.818 1.818H1.818A1.818 1.818 0 010 17.364V5.545c0-1.004.814-1.818 1.818-1.818h6.364v1.818a1.818 1.818 0 003.636 0V3.727zm5.455 7.728h-6.364v-.91h6.364v.91zm-6.364 1.818h6.364v-.91h-6.364v.91zm6.364 1.818h-6.364v-.91h6.364v.91zM5.91 9.18c2.204 0 2.039 2.952 1.06 4.42.979 0 2.123.965 2.12 1.944H2.728c0-.979 1.142-1.944 2.121-1.944-.979-1.469-1.142-4.42 1.062-4.42z"
        fill={color || "var(--expo-theme-icon-default)"}
      />
    </svg>
  );
}
