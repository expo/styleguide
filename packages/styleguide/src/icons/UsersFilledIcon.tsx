import React from "react";
import { IconProps } from "../types";
export function UsersFilledIcon(props: IconProps) {
  const {
    title = "Users-filled-icon",
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
        d="M10.487 13.914c2.42-3.439 2.827-10.348-2.62-10.348s-5.044 6.91-2.624 10.348c-2.42 0-5.243 2.26-5.243 4.553h15.73c.004-2.293-2.823-4.553-5.243-4.553z"
        fill={color || "var(--expo-theme-icon-default)"}
      />
      <path
        d="M14.71 11.847C17.13 8.41 17.538 1.5 12.09 1.5c-1.38 0-2.385.445-3.077 1.164 1.062.189 1.94.648 2.615 1.335.887.901 1.335 2.1 1.492 3.325.244 1.905-.188 4.067-1.038 5.833a7.299 7.299 0 012.58 1.41 6.47 6.47 0 011.52 1.834h3.772c.004-2.292-2.823-4.553-5.244-4.553z"
        fill={color || "var(--expo-theme-icon-default)"}
      />
    </svg>
  );
}
