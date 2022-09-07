import React from "react";
import { IconProps } from "../types";
export function SettingsIcon(props: IconProps) {
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
      viewBox="0 0 22 22"
      fill="none"
      width={size || width || "20px"}
      height={size || height || "20px"}
      role="img"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        clipRule="evenodd"
        d="M9.1 2.2a.447.447 0 01.44-.367h2.92c.216 0 .401.155.44.368l.418 2.296a.447.447 0 00.701.282l1.867-1.348a.447.447 0 01.578.047l2.058 2.058c.156.155.175.4.047.578L17.22 7.981a.447.447 0 00.282.701L19.8 9.1a.447.447 0 01.368.44v2.92a.447.447 0 01-.368.44l-2.296.418a.447.447 0 00-.282.701l1.348 1.867a.447.447 0 01-.047.578l-2.058 2.058a.447.447 0 01-.578.047l-1.867-1.348a.447.447 0 00-.701.282L12.9 19.8a.447.447 0 01-.44.368H9.54a.447.447 0 01-.44-.368l-.418-2.296a.447.447 0 00-.701-.282L6.114 18.57a.447.447 0 01-.578-.047l-2.058-2.058a.447.447 0 01-.047-.578l1.348-1.867a.447.447 0 00-.282-.701L2.2 12.9a.447.447 0 01-.367-.44V9.54c0-.216.155-.401.367-.44l2.297-.418a.447.447 0 00.282-.701L3.431 6.114a.447.447 0 01.047-.578l2.058-2.058a.447.447 0 01.578-.047L7.981 4.78a.447.447 0 00.701-.282L9.1 2.2zM11 13.908a2.907 2.907 0 100-5.814 2.907 2.907 0 000 5.813z"
        stroke={color || "var(--expo-theme-icon-default)"}
        strokeWidth={1.719}
      />
    </svg>
  );
}
