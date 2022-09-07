import React from "react";
import { IconProps } from "../types";
export function MessageIcon(props: IconProps) {
  const { title = "Message-icon", size, color, width, height, titleId } = props;
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
        d="M0 1.667C0 .747.746 0 1.667 0h16.666C19.253 0 20 .746 20 1.667V15c0 .92-.746 1.667-1.667 1.667H9.498c-.295 0-.585.078-.84.227L3.333 20v-2.5a.833.833 0 00-.833-.833h-.833C.747 16.667 0 15.92 0 15V1.667zM5 10a1.667 1.667 0 100-3.333A1.667 1.667 0 005 10zm6.667-1.667a1.667 1.667 0 11-3.334 0 1.667 1.667 0 013.334 0zM15 10a1.667 1.667 0 100-3.333A1.667 1.667 0 0015 10z"
        fill={color || "var(--expo-theme-icon-default)"}
      />
    </svg>
  );
}
