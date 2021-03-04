import React from "react";
import { IconProps } from "../../types";
export default function ChannelIcon(props: IconProps) {
  const { title = "Channel-icon", size, color, width, height, titleId } = props;
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={size || width || "20px"}
      height={size || height || "20px"}
      role="img"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <rect
        x={7.083}
        y={0.833}
        width={5.833}
        height={5.833}
        rx={0.833}
        fill={color || "var(--expo-theme-icon-default)"}
      />
      <rect
        x={1.667}
        y={13.333}
        width={5.833}
        height={5.833}
        rx={0.833}
        fill={color || "var(--expo-theme-icon-default)"}
      />
      <rect
        x={12.5}
        y={13.333}
        width={5.833}
        height={5.833}
        rx={0.833}
        fill={color || "var(--expo-theme-icon-default)"}
      />
      <path
        d="M10 4.693v3.224c0 .92-.747 1.666-1.667 1.666H6.25c-.92 0-1.667.746-1.667 1.667v2.48M10 4.693v3.224c0 .92.746 1.666 1.667 1.666h2.083c.92 0 1.667.746 1.667 1.667v2.962"
        stroke={color || "var(--expo-theme-icon-default)"}
        strokeWidth={0.833}
      />
    </svg>
  );
}
