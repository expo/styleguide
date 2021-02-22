import React from "react";
import { IconProps } from "../../types";
export default function ThemeLightIcon(props: IconProps) {
  const {
    title = "Theme-light-icon",
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
        d="M4.608 18.75l2.582-2.583a6.4 6.4 0 00.643.643L5.25 19.392l-.642-.642zM2 11.545h3.652a6.46 6.46 0 000 .91H2v-.91zM4.608 5.25L7.19 7.833c.2-.23.414-.444.643-.643L5.25 4.607l-.642.643zM12 5.636c-.153 0-.304.006-.454.016V2h.909v3.652A6.455 6.455 0 0012 5.636zm4.81 2.197a6.4 6.4 0 00-.643-.643l2.583-2.583.642.643-2.582 2.583zM18.364 12a6.46 6.46 0 00-.016-.455H22v.91h-3.652c.01-.15.016-.302.016-.455zm-2.197 4.81c.23-.199.444-.414.643-.643l2.582 2.582-.642.643-2.583-2.582zM12 18.364c.153 0 .304-.006.455-.016V22h-.91v-3.652c.15.01.302.016.455.016zm0-.91a5.455 5.455 0 100-10.909 5.455 5.455 0 000 10.91z"
        fill={color || "var(--expo-color-theme-icon-default)"}
      />
    </svg>
  );
}
