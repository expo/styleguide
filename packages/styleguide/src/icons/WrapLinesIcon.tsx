import React from "react";
import { IconProps } from "../types";
export function WrapLinesIcon(props: IconProps) {
  const {
    title = "Wrap-lines-icon",
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
        d="M1.5 4.619a1 1 0 011-1h15a1 1 0 110 2h-15a1 1 0 01-1-1zm0 10a1 1 0 011-1h4a1 1 0 110 2h-4a1 1 0 01-1-1zm0-5a1 1 0 011-1H16a2.5 2.5 0 012.5 2.5v2a2.5 2.5 0 01-2.5 2.5h-2.5v-2H16a.5.5 0 00.5-.5v-2a.5.5 0 00-.5-.5H2.5a1 1 0 01-1-1z"
        fill={color || "var(--expo-theme-icon-default)"}
      />
      <path
        d="M13.6 11.857v5.524L8.947 14.62l4.653-2.762z"
        fill={color || "var(--expo-theme-icon-default)"}
      />
    </svg>
  );
}
