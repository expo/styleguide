import React from "react";
import { IconProps } from "../types";
export function OneTimePasswordIcon(props: IconProps) {
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
        d="M14.287 15.341v2.547a2.279 2.279 0 01-2.279 2.279H4.033a2.279 2.279 0 01-2.278-2.279V4.217a2.279 2.279 0 012.278-2.279h7.975a2.279 2.279 0 012.279 2.279v2.546"
        stroke={color || "var(--expo-theme-icon-default)"}
        strokeWidth={2.01}
      />
      <rect
        width={6.031}
        height={3.016}
        rx={1.005}
        transform="matrix(-1 0 0 1 10.802 1)"
        fill={color || "var(--expo-theme-icon-default)"}
      />
      <path
        d="M6.588 13.13h1.154l-.115-1.27 1.053.736.576-1.01-1.153-.534 1.153-.533-.576-1.01-1.053.736.115-1.27H6.588l.116 1.27-1.053-.736-.577 1.01 1.154.534-1.154.533.577 1.01 1.053-.736-.116 1.27zm5.267 0h1.154l-.115-1.27 1.053.736.577-1.01-1.154-.534 1.154-.533-.577-1.01-1.053.736.115-1.27h-1.154l.116 1.27-1.053-.736-.577 1.01 1.154.534-1.154.533.577 1.01 1.053-.736-.116 1.27zm5.389 0h1.154l-.116-1.27 1.053.736.577-1.01-1.154-.534 1.154-.533-.577-1.01-1.053.736.116-1.27h-1.154l.115 1.27-1.053-.736-.577 1.01 1.154.534-1.154.533.577 1.01 1.053-.736-.115 1.27z"
        fill={color || "var(--expo-theme-icon-default)"}
      />
    </svg>
  );
}
