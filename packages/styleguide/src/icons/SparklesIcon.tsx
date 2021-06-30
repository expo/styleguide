import React from "react";
import { IconProps } from "../../types";
export default function SparklesIcon(props: IconProps) {
  const {
    title = "Sparkles-icon",
    size,
    color,
    width,
    height,
    titleId,
  } = props;
  return (
    <svg
      width={size || width || "20px"}
      height={size || height || "20px"}
      viewBox="0 0 20 20"
      fill="none"
      role="img"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M15.148 12.876l-1.553 3.914c-.245.617-1.137.64-1.416.037l-1.847-3.989a.757.757 0 00-.416-.386l-3.67-1.416a.733.733 0 01-.09-1.339l3.826-2.066a.752.752 0 00.327-.345l1.87-4.039c.279-.603 1.171-.58 1.416.037l1.573 3.964a.75.75 0 00.362.393l4.057 2.045a.734.734 0 01-.087 1.355l-3.903 1.405a.756.756 0 00-.449.43zm-9.64-7.342L4.455 8.032c-.084.2-.373.207-.468.013L2.745 5.52a.253.253 0 00-.14-.126L.165 4.51a.245.245 0 01-.03-.451l2.49-1.265a.251.251 0 00.112-.113l1.25-2.54a.26.26 0 01.468.013l1.06 2.514a.251.251 0 00.124.13L8.29 4.054a.245.245 0 01-.028.457l-2.603.882a.252.252 0 00-.152.14zm.736 12.236l-.762 2.066c-.079.213-.387.22-.477.012l-.9-2.09a.252.252 0 00-.135-.133l-1.832-.76a.244.244 0 01-.031-.44l1.886-1.096a.25.25 0 00.105-.117l.907-2.107c.09-.209.398-.201.477.012L6.25 15.2a.25.25 0 00.116.133l2.007 1.088a.244.244 0 01-.03.446l-1.954.757a.252.252 0 00-.145.146z"
        fill={color || "var(--expo-theme-icon-default)"}
      />
    </svg>
  );
}
