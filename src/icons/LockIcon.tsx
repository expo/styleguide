import React from "react";
import { IconProps } from "../../types";
export default function LockIcon(props: IconProps) {
  const { title = "Lock-icon", size, color, width, height, titleId } = props;
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
        d="M16.945 11.147h-9.89c-.78 0-1.412.632-1.412 1.413v7.063c0 .78.632 1.413 1.412 1.413h9.89c.78 0 1.413-.632 1.413-1.413V12.56c0-.78-.633-1.413-1.413-1.413zm-9.89-1.413A2.826 2.826 0 004.23 12.56v7.063a2.826 2.826 0 002.825 2.826h9.89a2.826 2.826 0 002.825-2.826V12.56a2.826 2.826 0 00-2.825-2.826h-9.89zm0-3.238a4.945 4.945 0 019.89 0v3.238h-1.413V6.496a3.532 3.532 0 10-7.064 0v3.238H7.055V6.496z"
        fill={color || "var(--expo-color-theme-icon-default)"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.805 6.496a5.195 5.195 0 0110.39 0v2.998a3.076 3.076 0 012.825 3.066v7.063a3.076 3.076 0 01-3.075 3.076h-9.89a3.076 3.076 0 01-3.075-3.076V12.56a3.076 3.076 0 012.825-3.066V6.496zm.25 3.488A2.576 2.576 0 004.48 12.56v7.063A2.576 2.576 0 007.055 22.2h9.89a2.576 2.576 0 002.575-2.576V12.56a2.575 2.575 0 00-2.575-2.576h-9.89zm1.663-.5h6.564V6.496a3.282 3.282 0 10-6.564 0v2.988zm7.064 0h.913V6.496a4.695 4.695 0 00-9.39 0v2.988h.913V6.496a3.782 3.782 0 117.564 0v2.988zm-8.727 1.913c-.642 0-1.162.52-1.162 1.163v7.063c0 .643.52 1.163 1.162 1.163h9.89c.642 0 1.163-.52 1.163-1.163V12.56c0-.643-.521-1.163-1.163-1.163h-9.89zM5.393 12.56c0-.919.744-1.663 1.662-1.663h9.89c.918 0 1.663.744 1.663 1.663v7.063c0 .919-.745 1.663-1.663 1.663h-9.89a1.663 1.663 0 01-1.662-1.663V12.56z"
        fill={color || "var(--expo-color-theme-icon-default)"}
      />
    </svg>
  );
}
