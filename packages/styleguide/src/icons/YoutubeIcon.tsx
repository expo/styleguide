import React from "react";
import { IconProps } from "../types";
export default function YoutubeIcon(props: IconProps) {
  const { title = "Youtube-icon", size, color, width, height, titleId } = props;
  return (
    <svg
      viewBox="0 0 21 20"
      fill="none"
      width={size || width || "20px"}
      height={size || height || "20px"}
      role="img"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M11.064 2.498h.111c1.028.004 6.234.042 7.638.42a2.51 2.51 0 011.768 1.774c.127.474.215 1.105.276 1.753l.012.13.027.325.01.13c.082 1.143.091 2.212.093 2.446v.094a39.206 39.206 0 01-.103 2.576l-.01.13-.011.13c-.062.716-.155 1.426-.294 1.948a2.509 2.509 0 01-1.768 1.774c-1.45.39-6.962.418-7.726.42h-.176c-.387-.001-1.985-.009-3.66-.066l-.213-.008-.108-.004-.214-.008-.214-.01c-1.387-.06-2.709-.16-3.317-.324a2.509 2.509 0 01-1.768-1.774c-.14-.522-.232-1.232-.294-1.948l-.011-.13-.01-.13A39.25 39.25 0 01.998 9.6v-.153c.002-.268.012-1.198.08-2.223l.008-.128.005-.065.01-.13.026-.325.012-.13c.062-.648.15-1.279.277-1.753a2.51 2.51 0 011.768-1.774c.608-.164 1.93-.264 3.317-.325l.214-.009.214-.008.108-.004.214-.008c1.567-.054 3.068-.064 3.57-.065h.242zM8.999 6.512v6.022l5.196-3.01-5.196-3.012z"
        fill={color || "var(--expo-theme-icon-default)"}
      />
    </svg>
  );
}
