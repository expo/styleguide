import React from "react";
import { IconProps } from "../types";
export function MegaphoneIcon(props: IconProps) {
  const {
    title = "Megaphone-icon",
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
        d="M15.91 1.667c-2.006 0-9 5.09-9 5.09v6.182s6.994 5.09 9 5.09c2.331 0 4.09-3.517 4.09-8.18 0-4.665-1.759-8.182-4.09-8.182zm0 14.545c-.928 0-2.274-2.479-2.274-6.364 0-3.884 1.346-6.363 2.273-6.363s2.273 2.479 2.273 6.363c0 3.885-1.346 6.364-2.273 6.364z"
        fill={color || "var(--expo-theme-icon-default)"}
      />
      <path
        d="M15.91 12.342c.602 0 1.09-1.116 1.09-2.494 0-1.377-.488-2.494-1.09-2.494-.603 0-1.092 1.117-1.092 2.494 0 1.378.489 2.494 1.091 2.494zM3.333 17.667c0 .7.573 1.273 1.273 1.273h1.273c.7 0 1.273-.573 1.273-1.273v-3.292l-.243-.208-.417-.319H3.333v3.819zm2.485-4.727V6.757H3.091a3.09 3.09 0 100 6.181h2.727z"
        fill={color || "var(--expo-theme-icon-default)"}
      />
    </svg>
  );
}
