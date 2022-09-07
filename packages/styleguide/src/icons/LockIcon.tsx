import React from "react";
import { IconProps } from "../types";
export function LockIcon(props: IconProps) {
  const { title = "Lock-icon", size, color, width, height, titleId } = props;
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
        d="M4.998 5.814v-.451c0-1.337.483-2.61 1.386-3.544A4.522 4.522 0 019.734.337h.161c2.626 0 4.736 2.255 4.736 5.026v1.9c-.612-.24-1.353-.321-2.03-.29v-1.61c0-1.579-1.208-2.868-2.69-2.868h-.177c-1.498 0-2.706 1.29-2.706 2.868v.435c0 .548-.387 1.015-.902 1.063H6.11a.966.966 0 01-1.034-.627 1.095 1.095 0 01-.078-.436v.016zM17 17.793v-7.7a1.112 1.112 0 00-.855-1.111l-.096-.016a31.895 31.895 0 00-12.597 0l-.08.016a1.112 1.112 0 00-.87 1.111v7.7c0 .532.354 1 .87 1.112l.644.129c3.785.76 7.684.76 11.469 0l.644-.13a1.111 1.111 0 00.87-1.127v.016z"
        fill={color || "var(--expo-theme-icon-default)"}
      />
    </svg>
  );
}
