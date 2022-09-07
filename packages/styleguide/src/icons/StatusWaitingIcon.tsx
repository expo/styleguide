import React from "react";
import { IconProps } from "../types";
export function StatusWaitingIcon(props: IconProps) {
  const {
    title = "Status-waiting-icon",
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0zm0 11a1 1 0 01-1-1V5a1 1 0 012 0v4h3a1 1 0 110 2h-4z"
        fill={color || "var(--expo-theme-icon-default)"}
      />
    </svg>
  );
}
