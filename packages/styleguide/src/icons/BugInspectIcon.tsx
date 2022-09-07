import React from "react";
import { IconProps } from "../types";
export function BugInspectIcon(props: IconProps) {
  const {
    title = "Bug-inspect-icon",
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
        d="M10.272 3.06a2.828 2.828 0 00-5.443 0 6.065 6.065 0 015.443 0z"
        fill={color || "var(--expo-theme-icon-default)"}
      />
      <path
        d="M9.329 15.786a5.831 5.831 0 012.963-9.595h-.123a5.182 5.182 0 00-9.237 0H2.36A1.416 1.416 0 01.944 4.775a.472.472 0 10-.944 0 2.362 2.362 0 002.36 2.36h.2c-.132.46-.2.936-.2 1.415v.472H.472a.472.472 0 000 .944H2.36v.944c0 .316.03.632.09.944h-.09A2.363 2.363 0 000 14.214a.472.472 0 10.944 0 1.416 1.416 0 011.416-1.417h.36a5.184 5.184 0 006.609 2.99zm4.049-9.746a1.417 1.417 0 00.78-1.265.472.472 0 11.943 0c0 .486-.151.957-.426 1.35a5.866 5.866 0 00-1.297-.085z"
        fill={color || "var(--expo-theme-icon-default)"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.726 15.556a4.24 4.24 0 111.141-.942l2.665 2.665a.736.736 0 11-1.041 1.042l-2.765-2.765zm.555-3.693a2.64 2.64 0 11-5.282 0 2.64 2.64 0 015.282 0z"
        fill={color || "var(--expo-theme-icon-default)"}
      />
    </svg>
  );
}
