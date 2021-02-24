import React from "react";
import { IconProps } from "../../types";
export default function HomeIcon(props: IconProps) {
  const { title = "Home-icon", size, color, width, height, titleId } = props;
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
        d="M3 8.5V21h6v-5.792c0-.722.461-1.362 1.146-1.59a5.865 5.865 0 013.708 0A1.676 1.676 0 0115 15.208V21h6V8.5L12 3 3 8.5z"
        stroke={color || "var(--expo-color-theme-icon-default)"}
        strokeWidth={2}
      />
    </svg>
  );
}
