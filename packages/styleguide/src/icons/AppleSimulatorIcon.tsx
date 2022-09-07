import React from "react";
import { IconProps } from "../types";
export function AppleSimulatorIcon(props: IconProps) {
  const {
    title = "Apple-simulator-icon",
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
      <rect
        x={3.75}
        y={0.75}
        width={12.5}
        height={18.5}
        rx={2.25}
        stroke={color || "var(--expo-theme-icon-default)"}
        strokeWidth={1.5}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.212 7.28a.64.64 0 10-1.108-.64l-2.993 5.169h1.48l2.621-4.528zm-3 5.181c-.272-.234-.566-.453-.82-.463-.371-.014-.495.179-.588.352l-.004-.004-.216.373a.64.64 0 001.108.642l.52-.9z"
        fill={color || "var(--expo-theme-icon-default)"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.887 10.529c.275.003.558.03.733.29.193.286.208.653.135.99H6.64a.64.64 0 110-1.28h3.247zm1.584 1.28h1.889a.64.64 0 100-1.28h-2.635l.746 1.28z"
        fill={color || "var(--expo-theme-icon-default)"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.819 7.28a.64.64 0 111.108-.64l.821 1.418-.76 1.24-1.169-2.017zm1.7 2.936l1.82 3.145a.64.64 0 101.108-.642l-2.465-4.256c-.157.02-.3.113-.41.332-.313.628-.173 1.16-.052 1.421h-.002z"
        fill={color || "var(--expo-theme-icon-default)"}
      />
      <path
        d="M7 1h6v1a1 1 0 01-1 1H8a1 1 0 01-1-1V1z"
        fill={color || "var(--expo-theme-icon-default)"}
      />
    </svg>
  );
}
