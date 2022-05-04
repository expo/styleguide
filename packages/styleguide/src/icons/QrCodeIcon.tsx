import React from "react";
import { IconProps } from "../types";
export default function QrCodeIcon(props: IconProps) {
  const { title = "Qr-code-icon", size, color, width, height, titleId } = props;
  return (
    <svg
      width={size || width || "20px"}
      height={size || height || "20px"}
      viewBox="0 0 20 20"
      fill="none"
      role="img"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <g
        opacity={0.91}
        clipPath="url(#qr-code-icon_svg__qr-code-icon_svg__clip0)"
        stroke={color || "var(--expo-theme-icon-default)"}
      >
        <path strokeWidth={2} d="M1.018 14h5v5h-5zm0-13h5v5h-5zM14 1h5v5h-5z" />
        <path d="M.443 12V8.5H8.5V5H10" />
        <path d="M2.5 10v1.5h4V10M7.995.5H11.5V3H8m3.5 4V4.5m-.998 15.52L10.5 14.5H8.49l.003-2.997h2.01V8.496H13.5V11m-5.002 9l.002-4m4-1.95v5.45h7v-5.45" />
        <path d="M12 12.5h2.5v2h3v-2h2V8" />
        <path d="M15.5 8v2.5H18m-.5 7.5v-1.5h-3V18" />
      </g>
      <defs>
        <clipPath id="qr-code-icon_svg__qr-code-icon_svg__clip0">
          <path fill="#fff" d="M0 0h20v20H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
