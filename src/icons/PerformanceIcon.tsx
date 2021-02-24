import React from "react";
import { IconProps } from "../../types";
export default function PerformanceIcon(props: IconProps) {
  const {
    title = "Performance-icon",
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
        d="M10.344 11.937l-.003-.002L20.8 5.992l-5.981 10.523-.003-.002a3.3 3.3 0 11-4.473-4.576z"
        fill={color || "var(--expo-color-theme-icon-default)"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 3.792c2.112 0 4.085.595 5.76 1.627l-2.056 1.168a9 9 0 00-10.893 13.62H2.423A10.95 10.95 0 011 14.793c0-6.075 4.925-11 11-11zm9.577 16.416A10.95 10.95 0 0023 14.792c0-2.112-.595-4.085-1.627-5.76l-1.169 2.055A8.968 8.968 0 0121 14.792a8.961 8.961 0 01-1.811 5.416h2.388z"
        fill={color || "var(--expo-color-theme-icon-default)"}
      />
    </svg>
  );
}
