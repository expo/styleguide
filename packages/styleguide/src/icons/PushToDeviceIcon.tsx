import React from "react";
import { IconProps } from "../types";
export function PushToDeviceIcon(props: IconProps) {
  const {
    title = "Push-to-device-icon",
    size,
    color,
    width,
    height,
    titleId,
  } = props;
  return (
    <svg
      viewBox="0 0 20 22"
      fill="none"
      width={size || width || "20px"}
      height={size || height || "20px"}
      role="img"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M8.164 7.57v6.816l5.453-3.407L8.164 7.57z"
        fill={color || "var(--expo-theme-icon-default)"}
      />
      <path
        d="M8.164 11.079H1.148"
        stroke={color || "var(--expo-theme-icon-default)"}
        strokeWidth={1.503}
        strokeLinecap="round"
      />
      <path
        d="M4.69 13.35v4.545a2.272 2.272 0 002.272 2.272h7.951a2.272 2.272 0 002.272-2.272V4.263a2.272 2.272 0 00-2.272-2.272H6.962A2.272 2.272 0 004.69 4.263v4.544"
        stroke={color || "var(--expo-theme-icon-default)"}
        strokeWidth={2.005}
      />
      <rect
        x={8.164}
        y={1.056}
        width={6.014}
        height={3.007}
        rx={1.002}
        fill={color || "var(--expo-theme-icon-default)"}
      />
    </svg>
  );
}
