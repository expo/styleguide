import React from "react";
import { IconProps } from "../types";
export function BranchIcon(props: IconProps) {
  const { title = "Branch-icon", size, color, width, height, titleId } = props;
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
        d="M14.189 2.874a.938.938 0 100 1.876.938.938 0 000-1.876zm-2.813.938a2.812 2.812 0 015.394-1.117c.205.473.275.993.205 1.504a2.813 2.813 0 01-1.849 2.265v.785a3.125 3.125 0 01-3.125 3.125h-5a1.25 1.25 0 00-1.25 1.25v1.41a2.813 2.813 0 11-1.875 0v-6.57a2.812 2.812 0 111.875 0V8.76c.394-.172.82-.26 1.25-.26h5a1.25 1.25 0 001.25-1.25v-.785a2.813 2.813 0 01-1.875-2.652zM4.814 14.749a.938.938 0 100 1.875.938.938 0 000-1.875zM3.876 3.812a.938.938 0 111.875 0 .938.938 0 01-1.875 0z"
        fill={color || "var(--expo-theme-icon-default)"}
      />
    </svg>
  );
}
