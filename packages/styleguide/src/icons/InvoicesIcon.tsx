import React from "react";
import { IconProps } from "../types";
export function InvoicesIcon(props: IconProps) {
  const {
    title = "Invoices-icon",
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
        d="M1.657 19.125H.875V.875h18.25v18.25h-.68l-1.589-1.302-.526-.43-.547.402-1.515 1.115-1.48-1.11-.526-.394-.524.394-1.476 1.106L8.788 17.8l-.525-.394-.525.394-1.475 1.106L4.788 17.8l-.485-.364-.511.326-2.135 1.363z"
        stroke={color || "var(--expo-theme-icon-default)"}
        strokeWidth={1.75}
      />
      <path
        d="M15 5.75h.75v-1.5H15v1.5zm-11 0h11v-1.5H4v1.5zm11 3h.75v-1.5H15v1.5zm-11 0h11v-1.5H4v1.5zm7 3h.75v-1.5H11v1.5zm-7 0h7v-1.5H4v1.5z"
        fill={color || "var(--expo-theme-icon-default)"}
      />
    </svg>
  );
}
