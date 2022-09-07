import React from "react";
import { IconProps } from "../types";
export function ActivityIcon(props: IconProps) {
  const {
    title = "Activity-icon",
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
        d="M13.706.163c.342.24.479.683.332 1.077L11.69 7.52l5.638 1.53a.922.922 0 01.363 1.573l-10.286 9.15a.896.896 0 01-1.112.064.922.922 0 01-.332-1.077l2.347-6.28-5.638-1.53a.91.91 0 01-.647-.676.923.923 0 01.284-.896L12.594.228a.896.896 0 011.112-.065zM4.772 9.624l4.97 1.348a.907.907 0 01.572.467c.116.23.131.5.04.742L8.94 15.97l6.289-5.594-4.97-1.348a.907.907 0 01-.572-.467.926.926 0 01-.04-.742L11.06 4.03 4.772 9.624z"
        fill={color || "var(--expo-theme-icon-default)"}
      />
    </svg>
  );
}
