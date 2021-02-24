import React from "react";
import { IconProps } from "../../types";
export default function UsersFilledIcon(props: IconProps) {
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
        d="M12.482 15.909c2.419-3.437 2.826-10.343-2.618-10.343-5.445 0-5.042 6.906-2.623 10.343-2.419 0-5.241 2.26-5.241 4.55h15.723c.004-2.29-2.822-4.55-5.241-4.55z"
        fill={color || "var(--expo-color-theme-icon-default)"}
      />
      <path
        d="M16.704 13.843C19.122 10.406 19.53 3.5 14.085 3.5c-1.38 0-2.385.444-3.076 1.163 1.062.189 1.938.648 2.614 1.334.886.901 1.334 2.1 1.49 3.324.245 1.904-.186 4.065-1.037 5.83a7.295 7.295 0 012.58 1.41c.597.504 1.14 1.128 1.518 1.833h3.77c.005-2.292-2.822-4.551-5.24-4.551z"
        fill={color || "var(--expo-color-theme-icon-default)"}
      />
    </svg>
  );
}
