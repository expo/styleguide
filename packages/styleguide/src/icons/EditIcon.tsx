import React from "react";
import { IconProps } from "../types";
export function EditIcon(props: IconProps) {
  const { title = "Edit-icon", size, color, width, height, titleId } = props;
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
      <g
        clipPath="url(#edit-icon_svg__edit-icon_svg__clip0_3427_2475)"
        stroke={color || "var(--expo-theme-icon-default)"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9.167 3.333H3.333A1.667 1.667 0 001.667 5v11.667a1.667 1.667 0 001.666 1.666H15a1.666 1.666 0 001.667-1.666v-5.834" />
        <path d="M15.417 2.083a1.768 1.768 0 112.5 2.5L10 12.5l-3.333.833L7.5 10l7.917-7.917z" />
      </g>
      <defs>
        <clipPath id="edit-icon_svg__edit-icon_svg__clip0_3427_2475">
          <path fill="#fff" d="M0 0h20v20H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
