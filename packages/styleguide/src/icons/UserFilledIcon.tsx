import React from "react";
import { IconProps } from "../types";
export function UserFilledIcon(props: IconProps) {
  const {
    title = "User-filled-icon",
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
        d="M13.365 13.889C16.473 9.273 16.995 0 10.002 0 3.008 0 3.526 9.273 6.633 13.889c-2.772 0-5.956 2.415-6.61 5.12-.13.538.328.991.886.991h18.182c.557 0 1.016-.452.887-.989-.65-2.706-3.84-5.122-6.613-5.122z"
        fill={color || "var(--expo-theme-icon-default)"}
      />
    </svg>
  );
}
