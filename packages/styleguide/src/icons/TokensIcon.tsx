import React from "react";
import { IconProps } from "../types";
export function TokensIcon(props: IconProps) {
  const { title = "Tokens-icon", size, color, width, height, titleId } = props;
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
      <circle
        cx={13.5}
        cy={10}
        r={5.625}
        stroke={color || "var(--expo-theme-icon-default)"}
        strokeWidth={1.75}
      />
      <path
        d="M16.131 10A2.631 2.631 0 0013.5 7.37"
        stroke={color || "var(--expo-theme-icon-default)"}
        strokeWidth={1.5}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.594 14.264a4.75 4.75 0 110-8.529A6.55 6.55 0 0110 4.522a6.5 6.5 0 100 10.956 6.533 6.533 0 01-1.406-1.213z"
        fill={color || "var(--expo-theme-icon-default)"}
      />
    </svg>
  );
}
