import React from "react";
import { IconProps } from "../types";
export function PlanEnterpriseIcon(props: IconProps) {
  const {
    title = "Plan-enterprise-icon",
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.932 1.83a1.08 1.08 0 00-1.864 0L.149 17.079a1.08 1.08 0 00.933 1.626h17.836a1.08 1.08 0 00.933-1.626L10.932 1.831zm5.632 14.444l-1.225-2.095H4.661l-1.225 2.095h13.128zm-3.458-5.912l1.19 2.035H5.704l1.19-2.035h6.213zm-1.042-1.783L10 5.051 7.936 8.579h4.128z"
        fill={color || "var(--expo-theme-icon-default)"}
      />
    </svg>
  );
}
