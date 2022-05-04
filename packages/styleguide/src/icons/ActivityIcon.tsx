import React from "react";
import { IconProps } from "../types";
export default function ActivityIcon(props: IconProps) {
  const {
    title = "Activity-icon",
    size,
    color,
    width,
    height,
    titleId,
  } = props;
  return (
    <svg
      width={size || width || "20px"}
      height={size || height || "20px"}
      viewBox="0 0 20 21"
      fill="none"
      role="img"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <g clipPath="url(#activity-icon_svg__activity-icon_svg__clip0)">
        <path
          d="M13.086 1.541l-9.947 8.742 6.385 1.711-2.61 6.905 9.947-8.741-6.386-1.711 2.61-6.906z"
          stroke={color || "var(--expo-theme-icon-default)"}
          strokeWidth={1.75}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="activity-icon_svg__activity-icon_svg__clip0">
          <path fill="#fff" transform="translate(0 .22)" d="M0 0h20v20H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
