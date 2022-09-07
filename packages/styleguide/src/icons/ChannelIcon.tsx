import React from "react";
import { IconProps } from "../types";
export function ChannelIcon(props: IconProps) {
  const { title = "Channel-icon", size, color, width, height, titleId } = props;
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
        d="M5.031 9.377a1.517 1.517 0 01-.216-.148L.968 11.37l4.029 2.142a.5.5 0 00.47 0l3.54-1.897-3.976-2.24zm9.478 4.103l-3.514-1.869 3.966-2.234c.087-.05.167-.106.242-.17l3.801 2.115-4.024 2.157a.5.5 0 01-.471 0zM5.72 2.78l4.033 2.145a.5.5 0 00.47 0l4.025-2.158L10.244.54a.534.534 0 00-.519 0L5.72 2.78z"
        fill={color || "var(--expo-theme-icon-default)"}
      />
      <path
        d="M14.754 3.63l-4.058 2.176a1.5 1.5 0 01-1.413.002l-4.041-2.15.022 4.416a.496.496 0 00.258.431l4.2 2.366c.085.048.18.07.275.068.094.002.19-.02.274-.068l4.2-2.366a.5.5 0 00.257-.43l.026-4.444zm-4.752 8.586l.047-.025v.05l3.99 2.122a1.5 1.5 0 001.413-.002l4.057-2.175-.025 4.444-.001.033a.5.5 0 01-.257.397l-4.199 2.366a.532.532 0 01-.274.068.533.533 0 01-.274-.068l-4.2-2.333-.25-.152-.265.152-4.222 2.366a.538.538 0 01-.261.068h-.027a.537.537 0 01-.26-.068L.772 17.093a.498.498 0 01-.259-.43l-.022-4.414 4.036 2.147a1.5 1.5 0 001.413-.002l4.058-2.175v-.005l.004.002z"
        fill={color || "var(--expo-theme-icon-default)"}
      />
    </svg>
  );
}
