import React from "react";
import { IconProps } from "../types";
export function ScanIcon(props: IconProps) {
  const { title = "Scan-icon", size, color, width, height, titleId } = props;
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.875 1.25a.625.625 0 00-.625.625v3.75a.625.625 0 01-1.25 0v-3.75C0 .839.84 0 1.875 0h3.75a.625.625 0 110 1.25h-3.75zM13.75.625c0-.345.28-.625.625-.625h3.75C19.16 0 20 .84 20 1.875v3.75a.625.625 0 11-1.25 0v-3.75a.625.625 0 00-.625-.625h-3.75a.625.625 0 01-.625-.625zM.625 13.75c.345 0 .625.28.625.625v3.75c0 .345.28.625.625.625h3.75a.625.625 0 110 1.25h-3.75A1.875 1.875 0 010 18.125v-3.75c0-.345.28-.625.625-.625zm18.75 0c.345 0 .625.28.625.625v3.75C20 19.16 19.16 20 18.125 20h-3.75a.625.625 0 110-1.25h3.75c.345 0 .625-.28.625-.625v-3.75c0-.345.28-.625.625-.625z"
        fill={color || "var(--expo-theme-icon-default)"}
      />
      <path
        d="M3.75 5.625a.625.625 0 111.25 0v8.75a.625.625 0 11-1.25 0v-8.75zm2.5 0a.625.625 0 111.25 0v8.75a.625.625 0 11-1.25 0v-8.75zm2.5 0a.625.625 0 011.25 0v8.75a.625.625 0 11-1.25 0v-8.75zm2.5 0c0-.345.28-.625.625-.625h1.25c.345 0 .625.28.625.625v8.75c0 .345-.28.625-.625.625h-1.25a.625.625 0 01-.625-.625v-8.75zm3.75 0a.625.625 0 111.25 0v8.75a.625.625 0 11-1.25 0v-8.75z"
        fill={color || "var(--expo-theme-icon-default)"}
      />
    </svg>
  );
}
