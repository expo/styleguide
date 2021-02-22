import React from "react";
import { IconProps } from "../../types";
export default function ThemeAutoIcon(props: IconProps) {
  const {
    title = "Theme-auto-icon",
    size,
    color,
    width,
    height,
    titleId,
  } = props;
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 19.933a7.933 7.933 0 100-15.866v15.866zm0 1.667a9.6 9.6 0 009.6-9.6 9.6 9.6 0 10-9.6 9.6z"
        fill={color || "var(--expo-color-theme-icon-default)"}
      />
    </svg>
  );
}
