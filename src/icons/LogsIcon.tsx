import React from "react";
import { IconProps } from "../../types";
export default function LogsIcon(props: IconProps) {
  const { title = "Logs-icon", size, color, width, height, titleId } = props;
  return (
    <svg
      viewBox="0 0 24 24"
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
        d="M19.375 17.75V4.625A2.625 2.625 0 0016.75 2H4.062A3.062 3.062 0 001 5.063V7.25h4.375v13.125A2.625 2.625 0 008 23h10.938A3.062 3.062 0 0022 19.937V17.75h-2.625zm-14-12.25H2.75v-.438c0-.723.589-1.312 1.313-1.312.723 0 1.312.589 1.312 1.313V5.5zm8.388 4.375L15 8.638l2.369 2.368a.874.874 0 010 1.238L15 14.612l-1.237-1.237 1.75-1.75-1.75-1.75zm-5.507 2.369a.874.874 0 010-1.238l2.369-2.368 1.237 1.237-1.75 1.75 1.75 1.75-1.237 1.237-2.369-2.368zm11.994 7.694c0 .723-.589 1.312-1.313 1.312h-7.721c.177-.367.284-.8.284-1.313V19.5h8.75v.438z"
        fill={color || "var(--expo-color-theme-icon-default)"}
      />
    </svg>
  );
}
