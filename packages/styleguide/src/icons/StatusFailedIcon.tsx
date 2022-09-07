import React from "react";
import { IconProps } from "../types";
export function StatusFailedIcon(props: IconProps) {
  const {
    title = "Status-failed-icon",
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
        d="M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0zM6.464 13.536a1 1 0 010-1.415L8.586 10 6.464 7.879A1 1 0 117.88 6.464L10 8.586l2.121-2.122a1 1 0 111.415 1.415l-2.122 2.12 2.122 2.122a1 1 0 11-1.415 1.415L10 11.414l-2.121 2.122a1 1 0 01-1.415 0z"
        fill={color || "var(--expo-theme-icon-default)"}
      />
    </svg>
  );
}
