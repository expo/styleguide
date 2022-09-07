import React from "react";
import { IconProps } from "../types";
export function PersonalTrainerIcon(props: IconProps) {
  const {
    title = "Personal-trainer-icon",
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
        d="M10 6.406a2.812 2.812 0 100-5.625 2.812 2.812 0 000 5.625zm7.666 4.032L14.23 7.624a1.25 1.25 0 00-.792-.281H6.562a1.25 1.25 0 00-.791.281l-3.438 2.813a1.25 1.25 0 00-.268 1.63l1.426 2.796a1.148 1.148 0 002.003-1.115l-.726-2.073 1.482-1.212v8.442a.313.313 0 00.312.313h6.875a.313.313 0 00.313-.313v-8.442l1.482 1.213-.727 2.073a1.148 1.148 0 002.004 1.116l1.426-2.798a1.25 1.25 0 00-.269-1.63zm-5.479.343a.313.313 0 01-.312.313H10a.313.313 0 01-.313-.313v-.937A.313.313 0 0110 9.53h1.875a.312.312 0 01.312.313v.937z"
        fill={color || "var(--expo-theme-icon-default)"}
      />
    </svg>
  );
}
