import React from "react";
import { IconProps } from "../../types";
export default function ChannelIcon(props: IconProps) {
  const { title = "Channel-icon", size, color, width, height, titleId } = props;
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
      <rect
        x={8.5}
        y={1}
        width={7}
        height={7}
        rx={1}
        fill={color || "var(--expo-color-theme-icon-default)"}
      />
      <rect
        x={2}
        y={16}
        width={7}
        height={7}
        rx={1}
        fill={color || "var(--expo-color-theme-icon-default)"}
      />
      <rect
        x={15}
        y={16}
        width={7}
        height={7}
        rx={1}
        fill={color || "var(--expo-color-theme-icon-default)"}
      />
      <path
        d="M12 5.632V9.5a2 2 0 01-2 1.999H7.5a2 2 0 00-2 2v2.975M12 5.632V9.5a2 2 0 002 2h2.5a2 2 0 012 2v3.554"
        stroke={color || "var(--expo-color-theme-icon-default)"}
      />
    </svg>
  );
}
