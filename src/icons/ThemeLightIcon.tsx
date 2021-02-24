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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.19 16.167L4.608 18.75l.642.642 2.583-2.582a6.399 6.399 0 01-.643-.643zm1.29-1.29c.193.235.408.45.643.643l2.423-2.423v3.426a4.614 4.614 0 00.909 0v-3.426l2.422 2.423c.235-.193.45-.408.643-.643l-2.423-2.423h3.426a4.612 4.612 0 000-.909h-3.426l2.423-2.422a4.574 4.574 0 00-.643-.643l-2.422 2.422V7.478a4.6 4.6 0 00-.91 0v3.426L9.123 8.48a4.53 4.53 0 00-.642.642l2.422 2.422H7.477a4.6 4.6 0 000 .91h3.426L8.48 14.877zm-2.828-3.332H2v.91h3.652a6.457 6.457 0 010-.91zM7.19 7.833L4.608 5.25l.642-.643L7.833 7.19a6.505 6.505 0 00-.643.643zm4.356-2.18a6.459 6.459 0 01.909 0V2h-.91v3.652zm4.62 1.537c.23.199.445.414.644.643l2.582-2.583-.642-.643-2.583 2.583zm2.182 4.355a6.458 6.458 0 010 .91H22v-.91h-3.652zm-1.538 4.622c-.199.23-.414.444-.643.643l2.583 2.582.642-.642-2.582-2.583zm-4.355 2.18a6.452 6.452 0 01-.91 0V22h.91v-3.652z"
        fill={color || "var(--expo-color-theme-icon-default)"}
      />
      <path
        d="M17.454 12a5.455 5.455 0 11-10.909 0 5.455 5.455 0 0110.91 0z"
        fill={color || "var(--expo-color-theme-icon-default)"}
      />
    </svg>
  );
}
