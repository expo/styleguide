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
        cx={10}
        cy={15.833}
        r={1.741}
        transform="rotate(-90 10 15.833)"
        fill={color || "var(--expo-theme-icon-default)"}
      />
      <circle
        cx={10}
        cy={10}
        r={1.741}
        transform="rotate(-90 10 10)"
        fill={color || "var(--expo-theme-icon-default)"}
      />
      <circle
        cx={10}
        cy={4.167}
        r={1.741}
        transform="rotate(-90 10 4.167)"
        fill={color || "var(--expo-theme-icon-default)"}
      />
    </svg>
  );
}
