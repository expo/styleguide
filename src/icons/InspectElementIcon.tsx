import React from "react";
import { IconProps } from "../../types";
export default function InspectElementIcon(props: IconProps) {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.331 4.352H22V2H2v20h2.331V4.352z"
        fill={color || "var(--expo-color-theme-icon-default)"}
      />
      <path
        d="M6.653 19.648h2.332V22H6.653v-2.352zm4.385 0h2.331V22h-2.33v-2.352zm4.385 0h2.331V22h-2.331v-2.352zM22 6.535v2.353h-2.331V6.535H22zm0 4.425v2.352h-2.331V10.96H22zm0 4.424v2.352h-2.331v-2.352h2.33zm-2.331 4.264h2.33V22h-2.33v-2.352z"
        fill={color || "var(--expo-color-theme-icon-default)"}
      />
    </svg>
  );
}
