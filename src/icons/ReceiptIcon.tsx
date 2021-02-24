import React from "react";
import { IconProps } from "../../types";
export default function ReceiptIcon(props: IconProps) {
  const { title = "Receipt-icon", size, color, width, height, titleId } = props;
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
        d="M6 11h12M6 14h6M6 8h12M3 4a1 1 0 011-1h16a1 1 0 011 1v16.605l-3.1-1.052a2 2 0 00-1.355.025l-1.718.656-2.214-.705a2 2 0 00-1.237.008l-2.097.697-1.845-.67a2 2 0 00-1.326-.014L3 20.605V4z"
        stroke={color || "var(--expo-color-theme-icon-default)"}
        strokeWidth={2}
      />
    </svg>
  );
}
