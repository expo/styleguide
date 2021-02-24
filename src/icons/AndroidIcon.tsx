import React from "react";
import { IconProps } from "../../types";
export default function AndroidIcon(props: IconProps) {
  const { title = "Android-icon", size, color, width, height, titleId } = props;
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
      <path
        d="M17.063 14.79a.919.919 0 010-1.838.919.919 0 010 1.838zm-10.126 0a.919.919 0 010-1.838.919.919 0 010 1.838zm10.454-5.536l1.831-3.18a.38.38 0 10-.66-.382l-1.853 3.22A11.27 11.27 0 0012 7.902a11.27 11.27 0 00-4.709 1.01L5.438 5.691a.38.38 0 10-.66.382l1.83 3.181C3.466 10.97 1.316 14.163 1 17.934h22c-.315-3.772-2.465-6.965-5.609-8.68z"
        fill={color || "var(--expo-color-theme-icon-default)"}
      />
    </svg>
  );
}
