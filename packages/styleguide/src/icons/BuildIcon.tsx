import React from "react";
import { IconProps } from "../../types";
export default function BuildIcon(props: IconProps) {
  const { title = "Build-icon", size, color, width, height, titleId } = props;
  return (
    <svg
      width={size || width || "20px"}
      height={size || height || "20px"}
      viewBox="0 0 20 20"
      fill="none"
      role="img"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M10 18.943V9.098m0 9.845L1.964 14.92V5.08M10 18.943l8.037-4.022V5.08M10 9.098L1.964 5.08M10 9.098l8.037-4.018m-16.073 0L10 1.057l8.037 4.023"
        stroke={color || "var(--expo-theme-icon-default)"}
        strokeWidth={1.85}
      />
    </svg>
  );
}
