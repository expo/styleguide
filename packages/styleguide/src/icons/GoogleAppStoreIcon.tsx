import React from "react";
import { IconProps } from "../types";
export function GoogleAppStoreIcon(props: IconProps) {
  const {
    title = "Google-app-store-icon",
    size,
    color,
    width,
    height,
    titleId,
  } = props;
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
        d="M.707.502l9.67 9.451-9.679 9.511a.995.995 0 01-.107-.454V.972c0-.174.042-.333.116-.47zm.887-.531a.99.99 0 01.485.128l11.68 6.53-2.67 2.623L1.595-.029zm13.074 7.167l-2.863 2.813 3.013 2.946 3.54-1.942a1 1 0 00.007-1.75l-3.697-2.067zm-.766 6.261l-2.81-2.746-9.523 9.358a.993.993 0 00.503-.124l11.83-6.488z"
        fill={color || "var(--expo-theme-icon-default)"}
      />
    </svg>
  );
}
