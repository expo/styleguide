import React from "react";
import { IconProps } from "../../types";
export default function OpenIcon(props: IconProps) {
  const { title = "Open-icon", size, color, width, height, titleId } = props;
  return (
    <svg
      viewBox="0 0 20 20"
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
        d="M6.28 4.524l8.78 8.78L17.692 1.89 6.28 4.524z"
        fill={color || "var(--expo-color-theme-icon-default)"}
      />
      <path
        d="M10.67 8.913l-8.78 8.78"
        stroke={color || "var(--expo-color-theme-icon-default)"}
        strokeWidth={2.057}
        strokeLinecap="round"
      />
    </svg>
  );
}
