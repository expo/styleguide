import React from "react";
import { IconProps } from "../types";
export function StoreIcon(props: IconProps) {
  const { title = "Store-icon", size, color, width, height, titleId } = props;
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
        d="M2.973 9.89v8.43h14.056V9.89"
        stroke={color || "var(--expo-theme-icon-default)"}
        strokeWidth={1.667}
      />
      <path
        d="M.979 9.037L3.234 1.82h4.88l-.82 7.217s-.902 1.353-3.158 1.353C1.881 10.39.98 9.037.98 9.037zm18.044 0l-2.256-7.218h-4.88l.82 7.218s.902 1.353 3.158 1.353c2.255 0 3.158-1.353 3.158-1.353z"
        stroke={color || "var(--expo-theme-icon-default)"}
        strokeWidth={1.64}
      />
      <path
        d="M12.707 9.037l-.82-7.218H8.114l-.82 7.218S7.745 10.39 10 10.39c2.256 0 2.707-1.353 2.707-1.353z"
        stroke={color || "var(--expo-theme-icon-default)"}
        strokeWidth={1.64}
      />
      <path
        fill={color || "var(--expo-theme-icon-default)"}
        d="M7.251 13.584h5.5v4.736h-5.5z"
      />
    </svg>
  );
}
