import React from "react";
import { IconProps } from "../../types";
export default function BuildIcon(props: IconProps) {
  const { title = "Build-icon", size, color, width, height, titleId } = props;
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.477.129a1.02 1.02 0 01.993 0l8.127 4.519c.307.172.496.49.494.834l-.052 9.044a.953.953 0 01-.492.823l-8.024 4.52a1.018 1.018 0 01-.524.13 1.018 1.018 0 01-.524-.13l-8.027-4.52a.953.953 0 01-.492-.823L.909 5.482a.953.953 0 01.494-.834l.009-.005L9.477.129zM3.88 5.477L9.975 8.89l2.112-1.178L6.054 4.26 3.879 5.477zm-.943 8.491L2.9 7.144l6.082 3.406v6.824l-6.047-3.406zm5.086-10.81l1.953-1.093 6.117 3.412-2.034 1.135-6.036-3.454zm2.993 14.216V10.55L17.1 7.145l-.04 6.823-6.044 3.406z"
        fill={color || "var(--expo-theme-icon-default)"}
      />
    </svg>
  );
}
