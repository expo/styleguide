import React from "react";
import { IconProps } from "../types";
export function TwitterIcon(props: IconProps) {
  const { title = "Twitter-icon", size, color, width, height, titleId } = props;
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
        d="M6.283 18.75c7.546 0 11.676-6.254 11.676-11.668 0-.176 0-.352-.008-.527A8.357 8.357 0 0020 4.426a8.322 8.322 0 01-2.36.648 4.126 4.126 0 001.808-2.271 8.167 8.167 0 01-2.61.992A4.107 4.107 0 009.74 6.603c0 .32.04.631.105.935a11.657 11.657 0 01-8.46-4.286A4.111 4.111 0 002.658 8.73 4.153 4.153 0 01.8 8.218v.056a4.11 4.11 0 003.29 4.022 4.007 4.007 0 01-1.08.144c-.265 0-.521-.024-.77-.072a4.103 4.103 0 003.834 2.847 8.235 8.235 0 01-5.098 1.76A7.9 7.9 0 010 16.919a11.68 11.68 0 006.283 1.831z"
        fill={color || "var(--expo-theme-icon-default)"}
      />
    </svg>
  );
}
