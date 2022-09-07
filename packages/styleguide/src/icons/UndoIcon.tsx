import React from "react";
import { IconProps } from "../types";
export function UndoIcon(props: IconProps) {
  const { title = "Undo-icon", size, color, width, height, titleId } = props;
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
        d="M7.982 7.664v3.98L0 6.657l7.982-4.99v3.98h6.941a5.044 5.044 0 015.044 5.045v7.938a1.009 1.009 0 11-2.017 0v-7.938a3.026 3.026 0 00-3.027-3.027h-6.94z"
        fill={color || "var(--expo-theme-icon-default)"}
      />
    </svg>
  );
}
