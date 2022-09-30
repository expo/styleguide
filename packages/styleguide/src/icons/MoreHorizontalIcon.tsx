import React from "react";
import { IconProps } from "../types";
export function MoreHorizontalIcon(props: IconProps) {
  const {
    title = "More-horizontal-icon",
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
      <circle
        cx={4.167}
        cy={10}
        r={1.741}
        fill={color || "var(--expo-theme-icon-default)"}
      />
      <circle
        cx={10}
        cy={10}
        r={1.741}
        fill={color || "var(--expo-theme-icon-default)"}
      />
      <circle
        cx={15.833}
        cy={10}
        r={1.741}
        fill={color || "var(--expo-theme-icon-default)"}
      />
    </svg>
  );
}
