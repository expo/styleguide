import React from "react";
import { IconProps } from "../../types";
export default function InvoicesIcon(props: IconProps) {
  const {
    title = "Invoices-icon",
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
      viewBox="0 0 20 21"
      fill="none"
      role="img"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <g
        clipPath="url(#invoices-icon_svg__invoices-icon_svg__clip0)"
        stroke={color || "var(--expo-theme-icon-default)"}
      >
        <path
          d="M10.45 17.97L10 17.7l-.45.27-2.088 1.253-2.57-1.285-.484-.242-.433.324-1.767 1.325H2A1.125 1.125 0 01.875 18.22v-16c0-.621.504-1.125 1.125-1.125h16c.621 0 1.125.504 1.125 1.125v16c0 .622-.504 1.125-1.125 1.125h-.208l-1.767-1.325-.433-.324-.483.242-2.57 1.285-2.089-1.253z"
          strokeWidth={1.75}
        />
        <path d="M4.005 6.688h11.99M4.005 10.22h9.955" strokeWidth={2} />
      </g>
      <defs>
        <clipPath id="invoices-icon_svg__invoices-icon_svg__clip0">
          <path fill="#fff" transform="translate(0 .22)" d="M0 0h20v20H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
