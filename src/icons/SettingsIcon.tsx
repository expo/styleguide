import React from "react";
import { IconProps } from "../../types";
export default function SettingsIcon(props: IconProps) {
  const {
    title = "Settings-icon",
    size,
    color,
    width,
    height,
    titleId,
  } = props;
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
        clipRule="evenodd"
        d="M10.134 3.225a.439.439 0 01.432-.36h2.868a.44.44 0 01.432.36l.41 2.255a.439.439 0 00.688.277l1.833-1.323a.44.44 0 01.567.045l2.022 2.022a.439.439 0 01.045.567l-1.323 1.833a.44.44 0 00.277.689l2.255.41c.208.037.36.22.36.431V13.3a.439.439 0 01-.36.431l-2.255.41a.44.44 0 00-.277.69l1.323 1.832a.439.439 0 01-.045.567l-2.022 2.022a.44.44 0 01-.567.045l-1.833-1.323a.439.439 0 00-.689.277l-.41 2.255a.439.439 0 01-.431.36h-2.868a.439.439 0 01-.432-.36l-.41-2.255a.44.44 0 00-.688-.277l-1.833 1.323a.44.44 0 01-.567-.045L4.614 17.23a.44.44 0 01-.045-.567l1.323-1.833a.439.439 0 00-.277-.689l-2.255-.41A.439.439 0 013 13.3v-2.87a.44.44 0 01.36-.432l2.255-.41a.439.439 0 00.277-.688L4.57 7.068a.439.439 0 01.045-.567l2.022-2.022a.439.439 0 01.567-.045l1.833 1.323c.261.19.63.04.689-.277l.41-2.255zM12 14.72a2.854 2.854 0 100-5.708 2.854 2.854 0 000 5.708z"
        stroke={color || "var(--expo-color-theme-icon-default)"}
        strokeWidth={1.688}
      />
    </svg>
  );
}
