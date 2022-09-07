import React from "react";
import { IconProps } from "../types";
export function SecretsIcon(props: IconProps) {
  const { title = "Secrets-icon", size, color, width, height, titleId } = props;
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
        d="M17.839 2.183L16.09 3.932m0 0l2.623 2.623-3.06 3.06-2.623-2.623m3.06-3.06l-3.06 3.06m-3.593 3.593a4.81 4.81 0 11-6.8 6.8 4.808 4.808 0 016.8-6.799h0zm0 0l3.593-3.593"
        stroke={color || "var(--expo-theme-icon-default)"}
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
