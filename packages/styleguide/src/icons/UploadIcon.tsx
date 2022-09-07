import React from "react";
import { IconProps } from "../types";
export function UploadIcon(props: IconProps) {
  const { title = "Upload-icon", size, color, width, height, titleId } = props;
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
        d="M5.283 10.083h9.084L9.825 2.817l-4.542 7.266z"
        fill={color || "var(--expo-theme-icon-default)"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.908 1a.908.908 0 01-.908.908H1.65a.908.908 0 110-1.816H18c.502 0 .908.406.908.908zM9.825 9.175c.502 0 .908.407.908.908v9.084a.908.908 0 11-1.816 0v-9.084c0-.501.406-.908.908-.908z"
        fill={color || "var(--expo-theme-icon-default)"}
      />
    </svg>
  );
}
