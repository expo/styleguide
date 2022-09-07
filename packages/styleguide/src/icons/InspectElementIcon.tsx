import React from "react";
import { IconProps } from "../types";
export function InspectElementIcon(props: IconProps) {
  const {
    title = "Inspect-element-icon",
    size,
    color,
    width,
    height,
    titleId,
  } = props;
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
        d="M2.331 2.352H20V0H0v20h2.331V2.352z"
        fill={color || "var(--expo-theme-icon-default)"}
      />
      <path
        d="M4.653 17.648h2.332V20H4.652v-2.352zm4.385 0h2.331V20H9.04v-2.352zm4.385 0h2.331V20h-2.331v-2.352zM20 4.535v2.353h-2.331V4.535H20zm0 4.425v2.352h-2.331V8.96H20zm0 4.424v2.352h-2.331v-2.352h2.33zm-2.331 4.264h2.33V20h-2.33v-2.352z"
        fill={color || "var(--expo-theme-icon-default)"}
      />
    </svg>
  );
}
