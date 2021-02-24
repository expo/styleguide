import React from "react";
import { IconProps } from "../../types";
export default function BuildIcon(props: IconProps) {
  const { title = "Build-icon", size, color, width, height, titleId } = props;
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.425 1.142a1.12 1.12 0 011.092 0l8.94 4.97c.338.19.545.54.543.918l-.057 9.949a1.049 1.049 0 01-.541.905l-8.827 4.973a1.12 1.12 0 01-.576.143 1.12 1.12 0 01-.576-.143l-8.83-4.973a1.048 1.048 0 01-.541-.906L2 7.03a1.048 1.048 0 01.544-.918l.01-.005 8.871-4.965zM5.267 7.025l6.706 3.755 2.323-1.297-6.637-3.797-2.392 1.339zm-1.038 9.34L4.191 8.86l6.69 3.746v7.506L4.23 16.365zm5.595-11.89l2.149-1.203L18.7 7.025l-2.237 1.248-6.64-3.799zm3.292 15.636v-7.506l6.692-3.746-.043 7.506-6.649 3.746z"
        fill={color || "var(--expo-color-theme-icon-default)"}
      />
    </svg>
  );
}
