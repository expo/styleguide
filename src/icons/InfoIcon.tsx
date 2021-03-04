import React from "react";
import { IconProps } from "../../types";
export default function InfoIcon(props: IconProps) {
  const { title = "Info-icon", size, color, width, height, titleId } = props;
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
      <g clipPath="url(#info-icon_svg__info-icon_svg__clip0)">
        <path
          d="M10 1a9 9 0 100 18 9 9 0 000-18zm-.01 4.064a.962.962 0 01.73-.33c.229 0 .43.082.582.238.152.155.23.354.23.59 0 .295-.104.558-.308.78-.209.23-.453.347-.726.347a.777.777 0 01-.576-.244.844.844 0 01-.227-.607c0-.3.099-.561.295-.774zm1.499 8.48c-.746.7-1.279 1.138-1.628 1.337-.372.213-.679.317-.937.317a.814.814 0 01-.622-.254c-.152-.162-.23-.382-.23-.652 0-.69.392-2.293 1.197-4.9.013-.044.024-.086.031-.125a.814.814 0 00-.105.056c-.066.042-.267.2-.854.773a.25.25 0 01-.329.02l-.347-.27a.25.25 0 01-.033-.367c.542-.596 1.047-1.029 1.502-1.286.477-.269.88-.4 1.232-.4.227 0 .411.057.547.17a.621.621 0 01.225.492c0 .132-.063.474-.522 2.015-.657 2.203-.814 3.003-.825 3.28.125-.074.419-.283 1.046-.873a.25.25 0 01.347.003l.308.3a.25.25 0 01-.003.363z"
          fill={color || "var(--expo-theme-icon-default)"}
        />
      </g>
      <defs>
        <clipPath id="info-icon_svg__info-icon_svg__clip0">
          <path fill="#fff" d="M0 0h20v20H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
