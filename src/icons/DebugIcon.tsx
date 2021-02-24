import React from "react";
import { IconProps } from "../../types";
export default function DebugIcon(props: IconProps) {
  const { title = "Debug-icon", size, color, width, height, titleId } = props;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={size || width || "20px"}
      height={size || height || "20px"}
      role="img"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M9.22 8.283l3.336 3.308-3.315 3.288-1.476-1.464 1.84-1.824-1.86-1.845L9.22 8.283zm2.223.207l3.336 3.307 1.476-1.463-1.86-1.845 1.84-1.824-1.476-1.463-3.316 3.287z"
        fill={color || "var(--expo-color-theme-icon-default)"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 3.035A1.04 1.04 0 012.044 2h19.912A1.04 1.04 0 0123 3.035V17c0 .571-.424 1-1 1h-8v2h2v2H8v-2h2v-2H2c-.576 0-1-.429-1-1V3.035zM3 16V4h18v12H3z"
        fill={color || "var(--expo-color-theme-icon-default)"}
      />
    </svg>
  );
}
