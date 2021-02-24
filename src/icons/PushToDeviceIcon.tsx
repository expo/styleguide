import React from "react";
import { IconProps } from "../../types";
export default function PushToDeviceIcon(props: IconProps) {
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
        d="M10 8.5v6.8l5.44-3.4L10 8.5z"
        fill={color || "var(--expo-color-theme-icon-default)"}
      />
      <path
        d="M10 12H3"
        stroke={color || "var(--expo-color-theme-icon-default)"}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <path
        d="M6.533 14.267V18.8A2.267 2.267 0 008.8 21.067h7.933A2.267 2.267 0 0019 18.8V5.2a2.267 2.267 0 00-2.267-2.267H8.8A2.267 2.267 0 006.533 5.2v4.533"
        stroke={color || "var(--expo-color-theme-icon-default)"}
        strokeWidth={2}
      />
      <rect
        x={10}
        y={2}
        width={6}
        height={3}
        rx={1}
        fill={color || "var(--expo-color-theme-icon-default)"}
      />
    </svg>
  );
}
