import React from "react";
import { IconProps } from "../types";
export function RolloutIcon(props: IconProps) {
  const { title = "Rollout-icon", size, color, width, height, titleId } = props;
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
        d="M4.814 1.406C6.306.29 7.84.673 8.85 1.214a6.329 6.329 0 011.532 1.166l.095.1.015.017 7.805 7.209.003.011a5.581 5.581 0 01-3.881 9.593v.003H.999L0 5.36h3.396a4.751 4.751 0 01-.07-.378c-.153-1.08.054-2.506 1.488-3.576zM4.205 7.22l3.116 5.242 2.278 4.088.002-.002c.19.324.412.627.66.905H2.86l-1-10.233h2.345zm4.941 4.672l-.228-.384L5.555 5.85l-.001-.002-.005-.009a3.248 3.248 0 01-.145-.298 3.332 3.332 0 01-.236-.82c-.085-.605.014-1.268.759-1.825.686-.512 1.375-.4 2.044-.042a4.474 4.474 0 011.133.882l.011.012.001.001.02.024 4.407 4.377.07.055a5.588 5.588 0 00-4.467 3.687zm5.273 5.557a3.72 3.72 0 110-7.442 3.72 3.72 0 010 7.442z"
        fill={color || "var(--expo-theme-icon-default)"}
      />
      <circle
        r={1.747}
        transform="matrix(-1 0 0 1 14.466 13.868)"
        fill={color || "var(--expo-theme-icon-default)"}
      />
    </svg>
  );
}
