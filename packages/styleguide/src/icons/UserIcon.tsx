import React from "react";
import { IconProps } from "../types";
export function UserIcon(props: IconProps) {
  const { title = "User-icon", size, color, width, height, titleId } = props;
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
        d="M12.917 13.403C15.609 9.364 16.062 1.25 10.002 1.25c-6.06 0-5.611 8.114-2.919 12.153-2.692 0-5.833 2.655-5.833 5.347h17.5c.005-2.692-3.141-5.347-5.833-5.347z"
        stroke={color || "var(--expo-theme-icon-default)"}
        strokeWidth={1.852}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
