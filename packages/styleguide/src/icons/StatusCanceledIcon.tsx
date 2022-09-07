import React from "react";
import { IconProps } from "../types";
export function StatusCanceledIcon(props: IconProps) {
  const {
    title = "Status-canceled-icon",
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
        d="M0 10C0 4.5 4.5 0 10 0s10 4.5 10 10-4.5 10-10 10S0 15.5 0 10zm6-1a1 1 0 100 2h8a1 1 0 100-2H6z"
        fill={color || "var(--expo-theme-icon-default)"}
      />
    </svg>
  );
}
