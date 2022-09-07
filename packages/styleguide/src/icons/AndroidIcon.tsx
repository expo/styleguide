import React from "react";
import { IconProps } from "../types";
export function AndroidIcon(props: IconProps) {
  const { title = "Android-icon", size, color, width, height, titleId } = props;
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
        d="M14.219 12.325a.766.766 0 010-1.532.765.765 0 010 1.532zm-8.438 0a.766.766 0 010-1.532.765.765 0 010 1.532zm8.712-4.613l1.525-2.651a.317.317 0 10-.55-.318l-1.544 2.684A9.393 9.393 0 0010 6.585a9.393 9.393 0 00-3.924.842L4.531 4.742a.317.317 0 10-.55.319l1.526 2.65c-2.62 1.43-4.412 4.091-4.674 7.235h18.334c-.263-3.144-2.055-5.805-4.674-7.234z"
        fill={color || "var(--expo-theme-icon-default)"}
      />
    </svg>
  );
}
