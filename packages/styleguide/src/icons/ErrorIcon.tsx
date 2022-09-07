import React from "react";
import { IconProps } from "../types";
export function ErrorIcon(props: IconProps) {
  const { title = "Error-icon", size, color, width, height, titleId } = props;
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
        d="M4.167 1.667a2.5 2.5 0 00-2.5 2.5v11.666a2.5 2.5 0 002.5 2.5h11.666a2.5 2.5 0 002.5-2.5V4.167a2.5 2.5 0 00-2.5-2.5H4.167zm3.089 4.41a.833.833 0 00-1.179 1.179L8.821 10l-2.744 2.744a.833.833 0 101.179 1.178L10 11.178l2.744 2.744a.833.833 0 101.178-1.178L11.178 10l2.744-2.744a.833.833 0 10-1.178-1.179L10 8.821 7.256 6.077z"
        fill={color || "var(--expo-theme-icon-default)"}
      />
    </svg>
  );
}
