import React from "react";
import { IconProps } from "../../types";
export default function InfoIcon(props: IconProps) {
  const { title = "Info-icon", size, color, width, height, titleId } = props;
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
        d="M12 3a9 9 0 100 18 9 9 0 000-18zm-.011 4.064a.962.962 0 01.73-.33c.229 0 .43.082.582.238.152.156.23.354.23.59 0 .295-.104.558-.308.78-.209.23-.453.347-.726.347a.777.777 0 01-.576-.244.843.843 0 01-.227-.606c0-.302.099-.562.295-.775zm1.499 8.48c-.746.7-1.279 1.138-1.628 1.337-.372.213-.678.317-.937.317a.814.814 0 01-.622-.254c-.152-.162-.229-.382-.229-.652 0-.69.39-2.293 1.196-4.9.013-.044.024-.086.031-.125a.81.81 0 00-.105.056c-.066.042-.267.2-.854.773a.25.25 0 01-.329.02l-.347-.27a.25.25 0 01-.032-.367c.54-.596 1.046-1.028 1.501-1.286.477-.268.88-.4 1.232-.4.227 0 .411.057.547.17a.621.621 0 01.225.493c0 .13-.063.473-.522 2.014-.657 2.203-.814 3.003-.825 3.28.125-.074.419-.283 1.046-.873a.25.25 0 01.347.003l.308.3a.25.25 0 01-.003.363z"
        fill={color || "var(--expo-color-theme-icon-default)"}
      />
    </svg>
  );
}
