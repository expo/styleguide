import React from "react";
import { IconProps } from "../types";
export function LifebuoyIcon(props: IconProps) {
  const {
    title = "Lifebuoy-icon",
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.881 10a9.119 9.119 0 1118.238 0A9.119 9.119 0 01.88 10zM4.59 5.749A6.852 6.852 0 003.119 10c0 1.605.549 3.081 1.47 4.251l1.965-1.965A4.116 4.116 0 015.865 10c0-.845.254-1.631.69-2.286L4.588 5.75zm3.125 7.697L5.75 15.412A6.852 6.852 0 0010 16.881c1.605 0 3.081-.55 4.251-1.47l-1.965-1.966a4.115 4.115 0 01-2.286.689 4.115 4.115 0 01-2.286-.69zM16.882 10c0 1.605-.55 3.081-1.47 4.252l-1.966-1.966c.435-.655.689-1.44.689-2.286a4.12 4.12 0 00-.684-2.279l1.966-1.966A6.852 6.852 0 0116.88 10zm-2.637-5.417A6.852 6.852 0 0010 3.12a6.848 6.848 0 00-4.251 1.47l1.965 1.965A4.115 4.115 0 0110 5.865c.842 0 1.625.252 2.279.685l1.966-1.967zm-2.546 3.59a2.494 2.494 0 10.127.128.85.85 0 01-.127-.127z"
        fill={color || "var(--expo-theme-icon-default)"}
      />
    </svg>
  );
}
