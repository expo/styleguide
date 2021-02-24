import React from "react";
import { IconProps } from "../../types";
export default function ScanIcon(props: IconProps) {
  const { title = "Scan-icon", size, color, width, height, titleId } = props;
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
        d="M3.73 3.093a.636.636 0 00-.637.637v3.817a.636.636 0 11-1.272 0V3.73c0-1.055.854-1.909 1.909-1.909h3.817a.636.636 0 010 1.272H3.73zm12.087-.636c0-.351.285-.636.636-.636h3.817c1.055 0 1.909.854 1.909 1.909v3.817a.636.636 0 11-1.272 0V3.73a.636.636 0 00-.637-.637h-3.817a.636.636 0 01-.636-.636zm-13.36 13.36c.352 0 .636.285.636.636v3.817c0 .352.285.637.637.637h3.817a.636.636 0 010 1.272H3.73a1.909 1.909 0 01-1.91-1.909v-3.817c0-.351.285-.636.636-.636zm19.086 0c.351 0 .636.285.636.636v3.817a1.909 1.909 0 01-1.909 1.909h-3.817a.636.636 0 010-1.272h3.817a.636.636 0 00.637-.637v-3.817c0-.351.285-.636.636-.636z"
        fill={color || "var(--expo-color-theme-icon-default)"}
      />
      <path
        d="M5.638 7.547a.636.636 0 111.272 0v8.906a.636.636 0 11-1.272 0V7.547zm2.545 0a.636.636 0 111.272 0v8.906a.636.636 0 11-1.272 0V7.547zm2.545 0a.636.636 0 011.272 0v8.906a.636.636 0 11-1.272 0V7.547zm2.544 0c0-.352.285-.637.637-.637h1.272c.351 0 .636.285.636.637v8.906a.636.636 0 01-.636.637h-1.272a.636.636 0 01-.637-.637V7.547zm3.818 0a.636.636 0 111.272 0v8.906a.636.636 0 11-1.272 0V7.547z"
        fill={color || "var(--expo-color-theme-icon-default)"}
      />
    </svg>
  );
}
