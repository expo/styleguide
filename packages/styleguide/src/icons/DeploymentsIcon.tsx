import React from "react";
import { IconProps } from "../types";
export function DeploymentsIcon(props: IconProps) {
  const {
    title = "Deployments-icon",
    size,
    color,
    width,
    height,
    titleId,
  } = props;
  return (
    <svg
      viewBox="0 0 20 21"
      fill="none"
      width={size || width || "20px"}
      height={size || height || "20px"}
      role="img"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        clipRule="evenodd"
        d="M18.855 1.331l-1.15 6.85a4 4 0 01-1.886 2.766l-6.943 4.171-3.836-3.822L9.175 4.15a4 4 0 012.958-1.965l6.722-.854z"
        stroke={color || "var(--expo-theme-icon-default)"}
        strokeWidth={1.75}
        strokeLinejoin="round"
      />
      <path
        clipRule="evenodd"
        d="M4.974 11.517L.956 11.03l4.602-4.766L8.12 5.74l-3.147 5.778zm3.966 3.869l.592 3.867 4.718-4.566.397-2.725-5.707 3.424z"
        stroke={color || "var(--expo-theme-icon-default)"}
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
      <ellipse
        cx={13.528}
        cy={6.693}
        rx={1.816}
        ry={2.301}
        transform="rotate(44.984 13.528 6.693)"
        fill={color || "var(--expo-theme-icon-default)"}
      />
      <path
        d="M4.067 14.262l-2.79 2.819m4.729-1.002l-2.791 2.819"
        stroke={color || "var(--expo-theme-icon-default)"}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </svg>
  );
}
