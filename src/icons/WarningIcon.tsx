import React from "react";
import { IconProps } from "../../types";
export default function WarningIcon(props: IconProps) {
  const { title = "Warning-icon", size, color, width, height, titleId } = props;
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
        d="M10.133 3.615c.765-1.537 2.957-1.537 3.723-.001l7.441 14.916c.69 1.383-.316 3.008-1.861 3.008H4.564c-1.545 0-2.55-1.624-1.862-3.007l7.43-14.916zm3.723 4.402c0-.402-.215-.832-.526-1.153-.318-.328-.775-.584-1.31-.584-.532 0-.999.255-1.325.58-.32.318-.55.75-.55 1.157 0 .313.122 1.931.242 3.444.06.763.12 1.507.166 2.06l.055.665.015.185.004.049v.004a1.393 1.393 0 002.786 0v-.006l.005-.049.014-.185.05-.665c.041-.554.097-1.297.152-2.06.11-1.514.222-3.13.222-3.442zM12 20.02a1.93 1.93 0 100-3.86 1.93 1.93 0 000 3.86z"
        fill={color || "var(--expo-color-theme-icon-default)"}
        stroke={color || "var(--expo-color-theme-icon-default)"}
        strokeWidth={0.64}
      />
    </svg>
  );
}
