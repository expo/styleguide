import React from "react";
import { IconProps } from "../types";
export function ThemeLightIcon(props: IconProps) {
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
        d="M5.19 14.167L2.608 16.75l.642.642 2.583-2.582a6.399 6.399 0 01-.643-.643zm1.29-1.29c.193.235.408.45.643.643l2.422-2.423v3.426a4.614 4.614 0 00.91 0v-3.426l2.422 2.423c.235-.193.45-.408.643-.643l-2.423-2.423h3.426a4.612 4.612 0 000-.909h-3.426l2.423-2.422a4.574 4.574 0 00-.643-.643l-2.422 2.423V5.477a4.6 4.6 0 00-.91 0v3.426L7.123 6.48a4.53 4.53 0 00-.642.642l2.422 2.422H5.477a4.598 4.598 0 000 .91h3.426L6.48 12.877zM3.652 9.545H0v.91h3.652a6.457 6.457 0 010-.91zM5.19 5.833L2.608 3.25l.642-.643L5.833 5.19a6.505 6.505 0 00-.643.643zm4.355-2.18a6.455 6.455 0 01.91 0V0h-.91v3.652zm4.622 1.537a6.4 6.4 0 01.643.643l2.582-2.583-.642-.643-2.583 2.583zm2.18 4.355a6.458 6.458 0 010 .91H20v-.91h-3.652zm-1.537 4.622c-.199.23-.414.444-.643.643l2.583 2.582.642-.642-2.582-2.583zm-4.355 2.18a6.452 6.452 0 01-.91 0V20h.91v-3.652z"
        fill={color || "var(--expo-theme-icon-default)"}
      />
      <path
        d="M15.454 10a5.455 5.455 0 11-10.909 0 5.455 5.455 0 0110.91 0z"
        fill={color || "var(--expo-theme-icon-default)"}
      />
    </svg>
  );
}
