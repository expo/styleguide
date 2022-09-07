import React from "react";
import { IconProps } from "../types";
export function RunIcon(props: IconProps) {
  const { title = "Run-icon", size, color, width, height, titleId } = props;
  return (
    <svg
      viewBox="0 0 20 22"
      fill="none"
      width={size || width || "20px"}
      height={size || height || "20px"}
      role="img"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M15.75 2.959C15.75 4.087 14.823 5 13.676 5c-1.146 0-2.075-.914-2.075-2.042 0-1.128.93-2.042 2.075-2.042 1.147 0 2.076.914 2.076 2.042z"
        fill={color || "var(--expo-theme-icon-default)"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.444 5.832h2.472l4.065 3.914h1.186v1.998h-2.014L14.368 9.06l-.252 3.683 1.785 1.757v6.582h-2.03v-5.755l-1.97-1.94-.825 4.374-6.172-1.012.334-1.97 4.205.69.804-4.263.244-2.836-1.335.535v2.52h-2.03V7.563l4.318-1.731zM2.909 2.428H8.4v1.998H2.91V2.428zm-1.384 3.83h3.676v1.997H1.525V6.257zm-.692 3.786h4.324v1.997H.833v-1.997z"
        fill={color || "var(--expo-theme-icon-default)"}
      />
    </svg>
  );
}
