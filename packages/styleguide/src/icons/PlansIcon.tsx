import React from "react";
import { IconProps } from "../../types";
export default function PlansIcon(props: IconProps) {
  const { title = "Plans-icon", size, color, width, height, titleId } = props;
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
      <g clipPath="url(#plans-icon_svg__plans-icon_svg__clip0)">
        <path
          d="M10 5.22l1.545 3.13L15 8.855l-2.5 2.435.59 3.44L10 13.105 6.91 14.73l.59-3.44L5 8.855l3.455-.505L10 5.22z"
          stroke={color || "var(--expo-theme-icon-default)"}
          strokeWidth={1.75}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <rect
        x={0.875}
        y={2.009}
        width={18.25}
        height={16.423}
        rx={3.125}
        stroke={color || "var(--expo-theme-icon-default)"}
        strokeWidth={1.75}
      />
      <defs>
        <clipPath id="plans-icon_svg__plans-icon_svg__clip0">
          <path fill="#fff" transform="translate(4 4.22)" d="M0 0h12v12H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
