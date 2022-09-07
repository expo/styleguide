import React from "react";
import { IconProps } from "../types";
export function RuntimeVersionIcon(props: IconProps) {
  const {
    title = "Runtime-version-icon",
    size,
    color,
    width,
    height,
    titleId,
  } = props;
  return (
    <svg
      viewBox="0 0 21 20"
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
        d="M11.232.284a.982.982 0 00-.983 0L2.564 4.716a.982.982 0 00-.492.851v8.866c0 .35.188.675.492.85l7.685 4.433a.983.983 0 00.983 0l7.655-4.432c.303-.176.49-.5.49-.85V5.566a.982.982 0 00-.49-.85L11.232.284zm6.903 12.808l-.007.751-3.232 1.981.006-.751 1.272-.78.03-3.673-.053.033-1.233 1.695.007-.87 1.29-1.778.745-.456-.038 4.59 1.213-.742zm-4.085.591c-.015 1.788-.614 3.15-1.665 3.794-1.054.646-1.636.008-1.622-1.78.015-1.784.614-3.146 1.668-3.792 1.051-.644 1.633-.006 1.619 1.778zm-1.625-1.03c-.584.358-.902 1.26-.913 2.586-.001.11 0 .216.003.314l1.692-2.473c-.131-.517-.397-.663-.782-.427zm-.815 3.653c.13.513.393.661.781.423.581-.356.9-1.258.91-2.587a9.72 9.72 0 00-.003-.311l-1.688 2.475z"
        fill={color || "var(--expo-theme-icon-default)"}
      />
    </svg>
  );
}
