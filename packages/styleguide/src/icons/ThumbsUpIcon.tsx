import React from "react";
import { IconProps } from "../types";
export function ThumbsUpIcon(props: IconProps) {
  const {
    title = "Thumbs-up-icon",
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
        d="M11 3.66l2.92 6.46c.054.12.082.25.08.38v7.6c0 .504-.21.987-.585 1.343A2.054 2.054 0 0112 20H6a4.437 4.437 0 01-2.193-.673A4.135 4.135 0 012.3 17.672L.07 12.78A.908.908 0 010 12.4v-1.9c0-.756.317-1.48.88-2.015A3.082 3.082 0 013 7.65h4v-3.8c0-.756.317-1.48.88-2.015A3.082 3.082 0 0110 1c.266 0 .52.1.708.278.187.178.293.42.293.672v1.71zm8 5.84h-2c-.552 0-1 .425-1 .95V19c0 .525.448.95 1 .95h2c.552 0 1-.425 1-.95v-8.55c0-.525-.448-.95-1-.95z"
        fill={color || "var(--expo-theme-icon-default)"}
      />
    </svg>
  );
}
