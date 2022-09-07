import React from "react";
import { IconProps } from "../types";
export function CodeIcon(props: IconProps) {
  const { title = "Code-icon", size, color, width, height, titleId } = props;
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
        d="M4.998 14.403l-3.924-4.088a.893.893 0 010-1.228L4.998 5l1.179 1.228L2.842 9.7l3.335 3.474-1.179 1.228zm10.004 0l-1.179-1.228 3.335-3.474-3.335-3.473L15.002 5l3.924 4.087a.893.893 0 010 1.228l-3.924 4.088zM11.063 2L7.32 17.579 8.938 18 12.68 2.422 11.063 2z"
        fill={color || "var(--expo-theme-icon-default)"}
      />
    </svg>
  );
}
