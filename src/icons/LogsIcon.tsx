import React from "react";
import { IconProps } from "../../types";
export default function LogsIcon(props: IconProps) {
  const { title = "Logs-icon", size, color, width, height, titleId } = props;
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
        d="M16.146 14.792V3.854c0-1.208-.98-2.187-2.188-2.187H3.385A2.552 2.552 0 00.833 4.219v1.823H4.48v10.937c0 1.208.98 2.188 2.188 2.188h9.114a2.552 2.552 0 002.552-2.552v-1.823h-2.187zM4.479 4.583H2.292V4.22a1.095 1.095 0 012.187 0v.364zm6.99 3.646L12.5 7.2l1.974 1.973a.728.728 0 010 1.031L12.5 12.177l-1.031-1.031 1.458-1.459L11.47 8.23zM6.88 10.203a.728.728 0 010-1.031l1.974-1.974L9.885 8.23 8.427 9.687l1.458 1.459-1.03 1.03-1.975-1.973zm9.995 6.412c0 .603-.49 1.093-1.094 1.093H9.346c.148-.305.237-.667.237-1.093v-.365h7.292v.365z"
        fill={color || "var(--expo-color-theme-icon-default)"}
      />
    </svg>
  );
}
