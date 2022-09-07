import React from "react";
import { IconProps } from "../types";
export function ThumbsDownIcon(props: IconProps) {
  const {
    title = "Thumbs-down-icon",
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
        d="M9 17.34l-2.92-6.46A.91.91 0 016 10.5V2.9c0-.504.21-.987.585-1.343A2.055 2.055 0 018 1h6c.781.03 1.54.262 2.192.673.652.41 1.174.982 1.508 1.655l2.23 4.892c.05.12.074.25.07.38v1.9a2.78 2.78 0 01-.88 2.015 3.083 3.083 0 01-2.12.835h-4v3.8a2.78 2.78 0 01-.88 2.015A3.082 3.082 0 0110 20c-.266 0-.52-.1-.708-.278A.927.927 0 019 19.05v-1.71zM1 11.5h2c.552 0 1-.425 1-.95V2c0-.525-.448-.95-1-.95H1c-.552 0-1 .425-1 .95v8.55c0 .525.448.95 1 .95z"
        fill={color || "var(--expo-theme-icon-default)"}
      />
    </svg>
  );
}
