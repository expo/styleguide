import React from "react";
import { IconProps } from "../../types";
export default function UserIcon(props: IconProps) {
  const { title = "User-icon", size, color, width, height, titleId } = props;
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
        d="M15 15.5C17.77 11.346 18.235 3 12.002 3 5.77 3 6.231 11.346 9 15.5c-2.77 0-6 2.73-6 5.5h18c.005-2.77-3.23-5.5-6-5.5z"
        stroke={color || "var(--expo-color-theme-icon-default)"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
