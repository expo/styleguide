import React from "react";
import { IconProps } from "../types";
export function DebugIcon(props: IconProps) {
  const { title = "Debug-icon", size, color, width, height, titleId } = props;
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
        d="M7.684 6.903l2.78 2.756-2.763 2.74-1.23-1.22 1.533-1.52-1.55-1.537 1.23-1.22zm1.852.171l2.78 2.757 1.23-1.22-1.55-1.537 1.533-1.52-1.23-1.22-2.763 2.74z"
        fill={color || "var(--expo-theme-icon-default)"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.833 2.529c0-.476.39-.862.87-.862h16.594c.48 0 .87.386.87.862v11.638a.811.811 0 01-.834.833h-6.666v1.667h1.666v1.666H6.667v-1.666h1.666V15H1.667a.811.811 0 01-.834-.833V2.529zM2.5 13.333v-10h15v10h-15z"
        fill={color || "var(--expo-theme-icon-default)"}
      />
    </svg>
  );
}
