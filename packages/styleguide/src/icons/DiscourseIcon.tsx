import React from "react";
import { IconProps } from "../types";
export function DiscourseIcon(props: IconProps) {
  const {
    title = "Discourse-icon",
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
        d="M20 10c0 5.402-4.284 9.804-9.64 9.994V20H0V10C0 4.477 4.477 0 10 0s10 4.477 10 10zm-3.772-.15a6.079 6.079 0 01-8.617 5.524l-3.823.812 1.081-3.323A6.079 6.079 0 1116.228 9.85z"
        fill={color || "var(--expo-theme-icon-default)"}
      />
    </svg>
  );
}
