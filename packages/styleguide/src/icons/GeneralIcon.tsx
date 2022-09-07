import React from "react";
import { IconProps } from "../types";
export function GeneralIcon(props: IconProps) {
  const { title = "General-icon", size, color, width, height, titleId } = props;
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
      <mask id="general-icon_svg__a" fill="#fff">
        <rect width={8.75} height={8.75} rx={1} />
      </mask>
      <rect
        width={8.75}
        height={8.75}
        rx={1}
        stroke={color || "var(--expo-theme-icon-default)"}
        strokeWidth={3.5}
        mask="url(#general-icon_svg__a)"
      />
      <mask id="general-icon_svg__b" fill="#fff">
        <rect y={11.25} width={8.75} height={8.75} rx={1} />
      </mask>
      <rect
        y={11.25}
        width={8.75}
        height={8.75}
        rx={1}
        stroke={color || "var(--expo-theme-icon-default)"}
        strokeWidth={3.5}
        mask="url(#general-icon_svg__b)"
      />
      <mask id="general-icon_svg__c" fill="#fff">
        <rect x={11.25} y={11.25} width={8.75} height={8.75} rx={1} />
      </mask>
      <rect
        x={11.25}
        y={11.25}
        width={8.75}
        height={8.75}
        rx={1}
        stroke={color || "var(--expo-theme-icon-default)"}
        strokeWidth={3.5}
        mask="url(#general-icon_svg__c)"
      />
      <mask id="general-icon_svg__d" fill="#fff">
        <rect x={11.25} width={8.75} height={8.75} rx={1} />
      </mask>
      <rect
        x={11.25}
        width={8.75}
        height={8.75}
        rx={1}
        stroke={color || "var(--expo-theme-icon-default)"}
        strokeWidth={3.5}
        mask="url(#general-icon_svg__d)"
      />
    </svg>
  );
}
