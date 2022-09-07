import React from "react";
import { IconProps } from "../types";
export function StatusSuccessIcon(props: IconProps) {
  const {
    title = "Status-success-icon",
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
        d="M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0zM8.66 11.414L6.569 9.321a1 1 0 00-1.415 1.414l2.8 2.8a1 1 0 001.415 0l5.656-5.656a1 1 0 00-1.414-1.415l-4.95 4.95z"
        fill={color || "var(--expo-theme-icon-default)"}
      />
    </svg>
  );
}
