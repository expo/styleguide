import React from "react";
import { IconProps } from "../types";
export function PrivacyIcon(props: IconProps) {
  const { title = "Privacy-icon", size, color, width, height, titleId } = props;
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
        d="M16.953 13.923a.428.428 0 01-.568-.02l-1.992-1.933a.394.394 0 01-.095-.427 4.341 4.341 0 00-1.05-4.691c-1.268-1.23-3.16-1.628-4.84-1.02a.425.425 0 01-.44-.092l-1.33-1.291a.247.247 0 01-.07-.237.256.256 0 01.17-.182A10.73 10.73 0 0110 3.532c6.112 0 9.148 4.714 9.904 6.089a.769.769 0 010 .745 12.917 12.917 0 01-2.951 3.557zM2.263 1.348L18.924 17.51a.79.79 0 010 1.142.852.852 0 01-1.178 0L1.084 2.49a.79.79 0 010-1.142.852.852 0 011.178 0zm1.351 4.737l2.002 1.941a.394.394 0 01.095.426 4.342 4.342 0 001.054 4.682c1.265 1.227 3.151 1.627 4.83 1.025a.425.425 0 01.439.092l1.327 1.287a.25.25 0 01.07.237.255.255 0 01-.172.182 10.73 10.73 0 01-3.259.497c-6.112 0-9.148-4.713-9.904-6.088a.768.768 0 010-.745 12.913 12.913 0 012.95-3.556.428.428 0 01.568.02z"
        fill={color || "var(--expo-theme-icon-default)"}
      />
    </svg>
  );
}
