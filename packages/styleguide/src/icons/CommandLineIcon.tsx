import React from "react";
import { IconProps } from "../types";
export function CommandLineIcon(props: IconProps) {
  const {
    title = "Command-line-icon",
    size,
    color,
    width,
    height,
    titleId,
  } = props;
  return (
    <svg
      viewBox="0 0 20 21"
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
        d="M3.333.58A3.333 3.333 0 000 3.913v13.333a3.333 3.333 0 003.333 3.334h13.334A3.333 3.333 0 0020 17.246V3.913A3.333 3.333 0 0016.667.58H3.333zM5.36 6.02l4.479 4.565-4.479 4.564-1.326-1.3 3.202-3.264-3.202-3.263L5.36 6.02zm10.608 7.816H9.465v1.857h6.502v-1.857z"
        fill={color || "var(--expo-theme-icon-default)"}
      />
    </svg>
  );
}
