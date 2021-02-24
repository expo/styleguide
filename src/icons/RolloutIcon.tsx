import React from "react";
import { IconProps } from "../../types";
export default function RolloutIcon(props: IconProps) {
  const { title = "Rollout-icon", size, color, width, height, titleId } = props;
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
        d="M6.805 3.392C8.3 2.275 9.837 2.658 10.848 3.2a6.34 6.34 0 011.535 1.167l.095.1.015.017 7.818 7.221.002.011a5.59 5.59 0 01-3.887 9.608v.004H2.984l-1-13.976h3.401a4.761 4.761 0 01-.07-.378c-.153-1.081.054-2.51 1.49-3.582zm-.61 5.824l3.122 5.25 2.281 4.095.002-.002c.19.324.413.628.662.906H4.847l-1-10.25h2.349zm4.95 4.679l-.228-.384-3.37-5.668v-.001l-.005-.01a3.245 3.245 0 01-.145-.298 3.337 3.337 0 01-.237-.822c-.085-.606.014-1.27.76-1.827.687-.513 1.377-.402 2.048-.043a4.485 4.485 0 011.135.884l.01.012h.002l.02.024 4.414 4.385.07.055a5.597 5.597 0 00-4.474 3.693zm5.28 5.566a3.727 3.727 0 110-7.454 3.727 3.727 0 010 7.454z"
        fill={color || "var(--expo-color-theme-icon-default)"}
      />
      <circle
        r={1.75}
        transform="matrix(-1 0 0 1 16.473 15.874)"
        fill={color || "var(--expo-color-theme-icon-default)"}
      />
    </svg>
  );
}
