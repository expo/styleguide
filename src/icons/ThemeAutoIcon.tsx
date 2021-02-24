import React from "react";
import { IconProps } from "../../types";
export default function ThemeAutoIcon(props: IconProps) {
  const {
    title = "Theme-auto-icon",
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
      <circle
        cx={12}
        cy={12}
        r={8.767}
        stroke={color || "var(--expo-color-theme-icon-default)"}
        strokeWidth={1.667}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2.4v19.2a9.6 9.6 0 110-19.2z"
        fill={color || "var(--expo-color-theme-icon-default)"}
      />
    </svg>
  );
}
