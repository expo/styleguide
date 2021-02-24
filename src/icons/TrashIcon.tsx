import React from "react";
import { IconProps } from "../../types";
export default function TrashIcon(props: IconProps) {
  const { title = "Trash-icon", size, color, width, height, titleId } = props;
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
        d="M21.152 4.542h-4.808V3.495c0-.735-.679-1.3-1.527-1.3h-5.43c-.849 0-1.527.565-1.527 1.3v1.047H3.052a.833.833 0 00-.849.848c0 .48.368.848.849.848h1.046l1.047 13.18a2.83 2.83 0 002.828 2.8h8.23a2.83 2.83 0 002.828-2.8l1.074-13.151h1.047c.48 0 .848-.368.848-.849 0-.48-.368-.876-.848-.876zm-11.596-.65h5.091v.65h-5.09v-.65zm.34 13.772h-.028c-.453 0-.82-.368-.849-.82l-.311-6.9a.817.817 0 01.82-.877h.028c.453 0 .82.367.849.82l.311 6.9a.87.87 0 01-.82.877zm5.288-.82c-.028.452-.396.82-.848.82h-.028a.87.87 0 01-.82-.877l.31-6.9a.865.865 0 01.849-.82h.028a.87.87 0 01.82.876l-.31 6.9z"
        fill={color || "var(--expo-color-theme-icon-default)"}
      />
    </svg>
  );
}
