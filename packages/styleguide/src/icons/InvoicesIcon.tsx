import React from "react";
import { IconProps } from "../../types";
export default function InvoicesIcon(props: IconProps) {
  const {
    title = "Invoices-icon",
    size,
    color,
    width,
    height,
    titleId,
  } = props;
  return (
    <svg
      width={size || width || "20px"}
      height={size || height || "20px"}
      viewBox="0 0 20 20"
      fill="none"
      role="img"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M.875 18.673V3C.875 1.826 1.826.875 3 .875h14c1.174 0 2.125.951 2.125 2.125v15.673l-2.28-.977-.373-.16-.363.181-2.637 1.319-3.127-1.34-.345-.148-.345.148-3.127 1.34-2.637-1.319-.363-.181-.373.16-2.28.977z"
        stroke={color || "var(--expo-theme-icon-default)"}
        strokeWidth={1.75}
      />
      <path
        d="M5.265 5.732h9.47M5.265 8.43h9.47m-9.47 2.933h6.123"
        stroke={color || "var(--expo-theme-icon-default)"}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </svg>
  );
}
