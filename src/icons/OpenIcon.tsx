import React from "react";
import { IconProps } from "../../types";
export default function OpenIcon(props: IconProps) {
  const { title = "Open-icon", size, color, width, height, titleId } = props;
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
        d="M8 6.929l8.535 8.535 2.561-11.096L8 6.928z"
        fill={color || "var(--expo-color-theme-icon-default)"}
      />
      <path
        d="M12.268 11.197l-8.536 8.535"
        stroke={color || "var(--expo-color-theme-icon-default)"}
        strokeWidth={2}
        strokeLinecap="round"
      />
    </svg>
  );
}
