import React from "react";
import { IconProps } from "../types";
export function EasSubmitIcon(props: IconProps) {
  const {
    title = "Eas-submit-icon",
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
      <g clipPath="url(#eas-submit-icon_svg__eas-submit-icon_svg__clip0_3474_2527)">
        <path
          d="M18 8a1 1 0 10-2 0h2zm-1 10v1h1v-1h-1zM3 18H2v1h1v-1zM4 8a1 1 0 00-2 0h2zm2.5 11h1v-2h-1v2zm7-2h-1v2h1v-2zM16 8v10h2V8h-2zM4 18V8H2v10h2zm-1 1h3.5v-2H3v2zm14-2h-3.5v2H17v-2z"
          fill={color || "var(--expo-theme-icon-default)"}
        />
        <path
          d="M1 6.053L3.213 2H8l-.805 4.053S6.213 7.5 4 7.5 1 6.053 1 6.053zm18 0L16.787 2H12l.805 4.053S13.787 7.5 16 7.5s3-1.447 3-1.447z"
          stroke={color || "var(--expo-theme-icon-default)"}
          strokeWidth={2}
        />
        <path
          d="M13 6.5L12.09 2H7.91L7 6.5s.5 1.447 3 1.447S13 6.5 13 6.5z"
          stroke={color || "var(--expo-theme-icon-default)"}
          strokeWidth={2}
        />
        <path
          d="M10 19v-8m0 0l3 3m-3-3l-3 3"
          stroke={color || "var(--expo-theme-icon-default)"}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="eas-submit-icon_svg__eas-submit-icon_svg__clip0_3474_2527">
          <path fill="#fff" d="M0 0h20v20H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
