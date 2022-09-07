import React from "react";
import { IconProps } from "../types";
export function MailIcon(props: IconProps) {
  const { title = "Mail-icon", size, color, width, height, titleId } = props;
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
        d="M16.667 3.333H3.333a1.67 1.67 0 00-1.457.86.831.831 0 01.269.124L10 9.817l7.855-5.5a.832.832 0 01.269-.124 1.67 1.67 0 00-1.457-.86zm1.666 2.684l-7.855 5.499c-.287.2-.669.2-.956 0L1.667 6.017V15c0 .917.75 1.667 1.666 1.667h13.334c.916 0 1.666-.75 1.666-1.667V6.017z"
        fill={color || "var(--expo-theme-icon-default)"}
      />
    </svg>
  );
}
