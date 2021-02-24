import React from "react";
import { IconProps } from "../../types";
export default function RunIcon(props: IconProps) {
  const { title = "Run-icon", size, color, width, height, titleId } = props;
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
        d="M18.274 3.228c0 1.23-1.014 2.228-2.265 2.228-1.25 0-2.264-.998-2.264-2.228C13.745 1.998 14.76 1 16.01 1c1.25 0 2.265.997 2.265 2.228z"
        fill={color || "var(--expo-color-theme-icon-default)"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.575 6.362h2.698l4.433 4.27H22v2.18h-2.197l-3.038-2.927-.274 4.018 1.947 1.916V23h-2.215v-6.279l-2.15-2.115-.9 4.771-6.732-1.104.364-2.15 4.588.753.876-4.65.267-3.094-1.457.584v2.748H8.864V8.25l4.711-1.888zM4.264 2.649h5.99v2.179h-5.99v-2.18zm-1.51 4.177h4.01v2.18h-4.01v-2.18zM2 10.956h4.717v2.18H2v-2.18z"
        fill={color || "var(--expo-color-theme-icon-default)"}
      />
    </svg>
  );
}
