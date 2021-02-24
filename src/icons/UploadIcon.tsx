import React from "react";
import { IconProps } from "../../types";
export default function UploadIcon(props: IconProps) {
  const { title = "Upload-icon", size, color, width, height, titleId } = props;
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
        d="M7 12h10l-5-8-5 8z"
        fill={color || "var(--expo-color-theme-icon-default)"}
      />
      <path
        d="M21 2H3m9 10v10"
        stroke={color || "var(--expo-color-theme-icon-default)"}
        strokeWidth={2}
        strokeLinecap="round"
      />
    </svg>
  );
}
