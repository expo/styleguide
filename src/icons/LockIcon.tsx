import React from "react";
import { IconProps } from "../../types";
export default function LockIcon(props: IconProps) {
  const { title = "Lock-icon", size, color, width, height, titleId } = props;
  return (
    <svg
      viewBox="0 0 20 20"
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
        d="M14.622 9.203H5.378c-.729 0-1.32.59-1.32 1.32v6.602c0 .73.591 1.32 1.32 1.32h9.244c.729 0 1.32-.59 1.32-1.32v-6.602c0-.73-.591-1.32-1.32-1.32zm-9.244-1.32a2.64 2.64 0 00-2.64 2.64v6.602a2.64 2.64 0 002.64 2.641h9.244a2.641 2.641 0 002.64-2.64v-6.603a2.641 2.641 0 00-2.64-2.64H5.378zm0-3.028a4.622 4.622 0 119.244 0v3.027h-1.32V4.855a3.301 3.301 0 00-6.603 0v3.027h-1.32V4.855z"
        fill={color || "var(--expo-color-theme-icon-default)"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.145 4.855a4.855 4.855 0 119.71 0v2.803a2.875 2.875 0 012.641 2.865v6.602A2.875 2.875 0 0114.622 20H5.378a2.875 2.875 0 01-2.874-2.875v-6.602a2.875 2.875 0 012.64-2.865V4.855zm.233 3.26a2.407 2.407 0 00-2.407 2.408v6.602a2.407 2.407 0 002.407 2.408h9.244a2.407 2.407 0 002.407-2.408v-6.602a2.407 2.407 0 00-2.407-2.407H5.378zm1.554-.467h6.136V4.855a3.068 3.068 0 00-6.136 0v2.793zm6.603 0h.853V4.855a4.388 4.388 0 00-8.776 0v2.793h.853V4.855a3.535 3.535 0 017.07 0v2.793zM5.378 9.436c-.6 0-1.086.487-1.086 1.087v6.602c0 .6.486 1.087 1.086 1.087h9.244c.6 0 1.087-.486 1.087-1.087v-6.602c0-.6-.487-1.087-1.087-1.087H5.378zm-1.554 1.087c0-.858.696-1.554 1.554-1.554h9.244c.858 0 1.554.696 1.554 1.554v6.602c0 .859-.696 1.555-1.554 1.555H5.378a1.554 1.554 0 01-1.554-1.555v-6.602z"
        fill={color || "var(--expo-color-theme-icon-default)"}
      />
    </svg>
  );
}
