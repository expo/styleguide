import React from "react";
import { IconProps } from "../types";
export function DiscordIcon(props: IconProps) {
  const { title = "Discord-icon", size, color, width, height, titleId } = props;
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
      <path
        d="M16.956 3.273A16.495 16.495 0 0012.822 2a10.62 10.62 0 00-.526 1.071 15.802 15.802 0 00-4.58 0A13.146 13.146 0 007.192 2a16.3 16.3 0 00-4.135 1.273C.44 7.134-.269 10.904.085 14.623a16.848 16.848 0 005.065 2.538c.404-.546.768-1.132 1.081-1.749a10.612 10.612 0 01-1.708-.819 6.46 6.46 0 00.414-.323c3.295 1.506 6.864 1.506 10.119 0 .141.111.272.222.414.323a10.64 10.64 0 01-1.708.82 12.35 12.35 0 001.081 1.748 16.755 16.755 0 005.065-2.537c.434-4.306-.688-8.045-2.952-11.35zM6.686 12.33c-.99 0-1.8-.9-1.8-2 0-1.102.79-2.002 1.8-2.002 1 0 1.819.9 1.799 2.001 0 1.102-.799 2.001-1.8 2.001zm6.641 0c-.99 0-1.8-.9-1.8-2 0-1.102.79-2.002 1.8-2.002 1 0 1.82.9 1.8 2.001 0 1.102-.79 2.001-1.8 2.001z"
        fill={color || "var(--expo-theme-icon-default)"}
      />
    </svg>
  );
}
