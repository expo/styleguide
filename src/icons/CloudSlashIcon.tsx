import React from "react";
import { IconProps } from "../../types";
export default function CloudSlashIcon(props: IconProps) {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.343 8.296a4.75 4.75 0 00-.38 1.089c-2.281.59-3.989 2.617-3.989 5.06 0 2.918 2.431 5.233 5.366 5.233h10.386L14.8 17.752H6.34c-1.928 0-3.44-1.507-3.44-3.306 0-1.675 1.307-3.097 3.042-3.288l.857-.094v-.863c0-.127.015-.263.045-.404l-1.5-1.502zm3.994-1.373l-1.41-1.41A7.676 7.676 0 0112 4.335c3.676 0 6.751 2.676 7.197 6.184 2.163.41 3.829 2.265 3.829 4.537 0 1.514-.74 2.842-1.874 3.682l-1.386-1.387c.807-.48 1.334-1.339 1.334-2.295 0-1.462-1.23-2.697-2.81-2.697h-.964v-.962c0-2.81-2.357-5.136-5.326-5.136a5.73 5.73 0 00-2.663.662zM19.55 20.767L3.448 4.667l.948-.95 16.1 16.1-.948.95z"
        fill={color || "var(--expo-color-theme-icon-default)"}
      />
    </svg>
  );
}
