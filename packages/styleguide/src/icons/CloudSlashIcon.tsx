import React from "react";
import { IconProps } from "../types";
export function CloudSlashIcon(props: IconProps) {
  const {
    title = "Cloud-slash-icon",
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
        d="M4.453 6.913c-.144.295-.252.6-.318.908-1.9.491-3.323 2.18-3.323 4.217 0 2.432 2.025 4.36 4.471 4.36h8.655l-1.605-1.605h-7.05c-1.606 0-2.866-1.256-2.866-2.755 0-1.396 1.089-2.58 2.534-2.74l.715-.078v-.719c0-.106.013-.219.038-.337L4.453 6.913zM7.78 5.769L6.606 4.594A6.397 6.397 0 0110 3.613c3.063 0 5.626 2.23 5.997 5.153 1.803.342 3.191 1.887 3.191 3.78a3.806 3.806 0 01-1.561 3.069l-1.155-1.156a2.235 2.235 0 001.111-1.912c0-1.219-1.025-2.248-2.342-2.248h-.802v-.802c0-2.34-1.964-4.28-4.439-4.28-.815 0-1.571.212-2.219.552zm8.511 11.536L2.874 3.888l.79-.79 13.418 13.417-.791.79z"
        fill={color || "var(--expo-theme-icon-default)"}
      />
    </svg>
  );
}
