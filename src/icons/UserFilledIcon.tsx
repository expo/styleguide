import React from "react";
import { IconProps } from "../../types";
export default function UserFilledIcon(props: IconProps) {
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
        d="M15.333 15.889C18.41 11.274 18.928 2 12.003 2 5.077 2 5.59 11.274 8.667 15.889c-2.745 0-5.899 2.415-6.547 5.12-.129.538.326.991.878.991h18.005c.552 0 1.006-.452.879-.989-.645-2.706-3.803-5.122-6.549-5.122z"
        fill={color || "var(--expo-color-theme-icon-default)"}
      />
    </svg>
  );
}
