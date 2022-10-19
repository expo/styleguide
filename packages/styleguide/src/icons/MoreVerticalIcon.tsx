import React from "react";
import { IconProps } from "../types";
export function MoreVerticalIcon(props: IconProps) {
  const {
    title = "More-vertical-icon",
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
        cx="10"
        cy="15.8333"
        r="1.74072"
        transform="rotate(-90 10 15.8333)"
        fill={color || "var(--expo-theme-icon-default)"}
      />
      <circle
        cx="10"
        cy="10.0002"
        r="1.74072"
        transform="rotate(-90 10 10.0002)"
        fill={color || "var(--expo-theme-icon-default)"}
      />
      <circle
        cx="10"
        cy="4.16675"
        r="1.74072"
        transform="rotate(-90 10 4.16675)"
        fill={color || "var(--expo-theme-icon-default)"}
      />
    </svg>
  );
}
