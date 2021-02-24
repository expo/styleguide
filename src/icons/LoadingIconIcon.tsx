import React from "react";
import { IconProps } from "../../types";
export default function LoadingiconIcon(props: IconProps) {
  const {
    title = "Loading icon-icon",
    size,
    color,
    width,
    height,
    titleId,
  } = props;
  return (
    <svg
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={size || width || "20px"}
      height={size || height || "20px"}
      role="img"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <circle
        opacity={0.5}
        cx={12}
        cy={13}
        r={10.286}
        stroke={color || "var(--expo-color-theme-icon-default)"}
        strokeWidth={3.429}
      />
      <path
        opacity={0.9}
        d="M21.352 17.557a10.162 10.162 0 001.041-5.114 10.22 10.22 0 00-1.642-4.966 10.683 10.683 0 00-3.917-3.585 11.125 11.125 0 00-5.221-1.312"
        stroke={color || "var(--expo-color-theme-icon-default)"}
        strokeWidth={3.429}
        strokeLinecap="round"
      />
    </svg>
  );
}
