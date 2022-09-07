import React from "react";
import { IconProps } from "../types";
export function DeploymentIcon(props: IconProps) {
  const {
    title = "Deployment-icon",
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
        d="M2 2a2 2 0 00-2 2v12a2 2 0 002 2h7V9.747l-2.96 2.96a1 1 0 11-1.414-1.414l4.667-4.667a.996.996 0 01.71-.293c.28.001.534.117.715.304l4.656 4.656a1 1 0 01-1.415 1.414L11 9.747V18h7a2 2 0 002-2V4a2 2 0 00-2-2H2z"
        fill={color || "var(--expo-theme-icon-default)"}
      />
    </svg>
  );
}
