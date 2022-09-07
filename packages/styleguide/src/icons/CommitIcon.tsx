import React from "react";
import { IconProps } from "../types";
export function CommitIcon(props: IconProps) {
  const { title = "Commit-icon", size, color, width, height, titleId } = props;
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
        d="M3.333 0A3.333 3.333 0 000 3.333v13.334A3.333 3.333 0 003.333 20h13.334A3.333 3.333 0 0020 16.667V3.333A3.333 3.333 0 0016.667 0H3.333zm8.508 11.844A2.606 2.606 0 008.16 8.16a2.606 2.606 0 003.682 3.684zm.814 1.368a4.17 4.17 0 001.439-2.428h3.458a.78.78 0 100-1.563h-3.458A4.17 4.17 0 0010 5.833a4.167 4.167 0 00-4.094 3.388H2.448a.781.781 0 000 1.563h3.458a4.17 4.17 0 006.749 2.428z"
        fill={color || "var(--expo-theme-icon-default)"}
      />
    </svg>
  );
}
