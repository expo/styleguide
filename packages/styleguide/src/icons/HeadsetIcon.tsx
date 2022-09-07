import React from "react";
import { IconProps } from "../types";
export function HeadsetIcon(props: IconProps) {
  const { title = "Headset-icon", size, color, width, height, titleId } = props;
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
        d="M16.085 19.56h-4.781v-.87h4.781a2.176 2.176 0 002.174-2.173v-3.042h.869v3.042a3.046 3.046 0 01-3.043 3.043z"
        fill={color || "var(--expo-theme-icon-default)"}
      />
      <path
        d="M9.648.006C4.708.193.872 4.41.872 9.352v4.992a2.174 2.174 0 002.173 2.173H4.35a1.304 1.304 0 001.304-1.304v-4.347A1.304 1.304 0 004.35 9.562H2.176V9.32c0-4.237 3.288-7.85 7.522-8.01a7.833 7.833 0 018.126 7.818v.434h-2.608a1.304 1.304 0 00-1.304 1.304v4.347a1.304 1.304 0 001.304 1.304h1.739a2.173 2.173 0 002.173-2.173V9.128A9.138 9.138 0 009.648.006z"
        fill={color || "var(--expo-theme-icon-default)"}
      />
      <path
        d="M4.784 9.562a1.304 1.304 0 011.304 1.304v4.347a1.304 1.304 0 01-1.304 1.304H3.045a2.174 2.174 0 01-2.173-2.173V9.562h3.912z"
        fill={color || "var(--expo-theme-icon-default)"}
      />
      <path
        d="M4.784 9.562h-.87v6.955h.87a1.304 1.304 0 001.304-1.304v-4.347a1.304 1.304 0 00-1.304-1.304zm10.432 0a1.304 1.304 0 00-1.304 1.304v4.347a1.304 1.304 0 001.304 1.304h1.739a2.174 2.174 0 002.173-2.173V9.562h-3.912z"
        fill={color || "var(--expo-theme-icon-default)"}
      />
      <path
        d="M15.216 9.562h.87v6.955h-.87a1.304 1.304 0 01-1.304-1.304v-4.347a1.304 1.304 0 011.304-1.304zm-.914 8.254H10a.435.435 0 00-.435.434v1.315c0 .24.195.435.435.435h4.302c.24 0 .434-.195.434-.435V18.25a.435.435 0 00-.434-.434z"
        fill={color || "var(--expo-theme-icon-default)"}
      />
    </svg>
  );
}
