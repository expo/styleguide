import React from "react";
import { IconProps } from "../../types";
export default function ThemeDarkIcon(props: IconProps) {
  const {
    title = "Theme-dark-icon",
    size,
    color,
    width,
    height,
    titleId,
  } = props;
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
        d="M10.367 1.336a9.981 9.981 0 00-3.26 1.19c-4.783 2.762-6.422 8.877-3.66 13.66 2.761 4.783 8.877 6.422 13.66 3.66a9.973 9.973 0 002.84-2.446 10.004 10.004 0 01-10.401-4.85 10.003 10.003 0 01.821-11.214z"
        fill={color || "var(--expo-color-theme-icon-default)"}
      />
    </svg>
  );
}
