import React from "react";
import { IconProps } from "../types";
export function PerformanceIcon(props: IconProps) {
  const {
    title = "Performance-icon",
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.62 9.948l-.002-.002 8.715-4.953-4.984 8.77-.002-.002A2.75 2.75 0 118.62 9.948z"
        fill={color || "var(--expo-theme-icon-default)"}
      />
      <path
        d="M10 3.16c1.76 0 3.404.496 4.8 1.356l-1.713.973A7.5 7.5 0 004.01 16.84H2.02A9.167 9.167 0 0110 3.16zm-.024 18.334h.048-.048zm8.004-4.654a9.125 9.125 0 001.187-4.513c0-1.76-.496-3.404-1.356-4.8l-.974 1.712c.426.942.663 1.987.663 3.088a7.467 7.467 0 01-1.51 4.513h1.99z"
        fill={color || "var(--expo-theme-icon-default)"}
      />
    </svg>
  );
}
