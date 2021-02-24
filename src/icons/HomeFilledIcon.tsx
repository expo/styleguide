import React from "react";
import { IconProps } from "../../types";
export default function HomeFilledIcon(props: IconProps) {
  const {
    title = "Home-filled-icon",
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
        d="M2 8.806V22h7v-6.548c0-.51.305-.97.774-1.168a4.436 4.436 0 013.452 0c.469.198.774.658.774 1.168V22h7V8.806L11.5 3 2 8.806z"
        fill={color || "var(--expo-color-theme-icon-default)"}
      />
    </svg>
  );
}
