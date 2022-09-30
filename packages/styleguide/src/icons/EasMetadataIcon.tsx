import React from "react";
import { IconProps } from "../types";
export function EasMetadataIcon(props: IconProps) {
  const {
    title = "Eas-metadata-icon",
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
      <g clipPath="url(#eas-metadata-icon_svg__eas-metadata-icon_svg__clip0_3475_2492)">
        <path
          d="M3 8.32v9.18h14V8.32"
          stroke={color || "var(--expo-theme-icon-default)"}
          strokeWidth={2}
          strokeLinecap="round"
        />
        <path
          d="M1 6.525L3.213 1.5H8l-.805 5.025S6.213 8.319 4 8.319 1 6.525 1 6.525zm18 0L16.787 1.5H12l.805 5.025S13.787 8.319 16 8.319s3-1.794 3-1.794z"
          stroke={color || "var(--expo-theme-icon-default)"}
          strokeWidth={2}
        />
        <path
          d="M13 7.08l-.91-5.58H7.91L7 7.08s.5 1.794 3 1.794 3-1.795 3-1.795z"
          stroke={color || "var(--expo-theme-icon-default)"}
          strokeWidth={2}
        />
        <path
          fill={color || "var(--expo-theme-icon-default)"}
          d="M7.25 12.5h5.5v4.736h-5.5z"
        />
      </g>
      <defs>
        <clipPath id="eas-metadata-icon_svg__eas-metadata-icon_svg__clip0_3475_2492">
          <path fill="#fff" d="M0 0h20v20H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
