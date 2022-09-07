import React from "react";
import { IconProps } from "../types";
export function BuildProfileIcon(props: IconProps) {
  const {
    title = "Build-profile-icon",
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
        d="M0 3.333A3.333 3.333 0 013.333 0h13.334A3.333 3.333 0 0120 3.333v13.334A3.333 3.333 0 0116.667 20H3.333A3.333 3.333 0 010 16.667V3.333zm7.963.741a.74.74 0 10-1.482 0v6.052a2.223 2.223 0 000 4.192v1.608a.74.74 0 101.482 0v-1.608a2.223 2.223 0 000-4.192V4.074zm5.185 12.593a.74.74 0 01-.74-.741V9.874a2.223 2.223 0 010-4.192V4.074a.74.74 0 011.48 0v1.608a2.223 2.223 0 010 4.192v6.052a.74.74 0 01-.74.74z"
        fill={color || "var(--expo-theme-icon-default)"}
      />
    </svg>
  );
}
