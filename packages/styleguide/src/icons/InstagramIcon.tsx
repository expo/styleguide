import React from "react";
import { IconProps } from "../types";
export default function InstagramIcon(props: IconProps) {
  const {
    title = "Instagram-icon",
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
        d="M10 0C7.286 0 6.945.012 5.879.06 4.813.11 4.086.278 3.45.525a4.897 4.897 0 00-1.77 1.153A4.909 4.909 0 00.525 3.45C.277 4.085.108 4.812.06 5.877.012 6.943 0 7.284 0 10s.012 3.056.06 4.122c.05 1.065.218 1.792.465 2.427a4.9 4.9 0 001.153 1.772 4.896 4.896 0 001.771 1.154c.636.247 1.363.416 2.428.465 1.066.048 1.407.06 4.123.06s3.056-.012 4.122-.06c1.065-.049 1.792-.218 2.429-.465a4.892 4.892 0 001.77-1.154 4.909 4.909 0 001.154-1.771c.246-.636.415-1.363.465-2.427.047-1.067.06-1.407.06-4.123s-.012-3.057-.06-4.123c-.05-1.065-.22-1.792-.465-2.427a4.908 4.908 0 00-1.154-1.772A4.887 4.887 0 0016.55.525C15.912.278 15.185.109 14.12.06 13.055.012 12.716 0 9.999 0H10zm-.896 1.802H10c2.67 0 2.986.01 4.04.058.976.044 1.505.207 1.857.344.467.181.8.398 1.15.748.35.35.566.683.748 1.15.137.352.3.881.344 1.856.048 1.054.059 1.371.059 4.04s-.01 2.985-.059 4.04c-.044.974-.207 1.504-.344 1.856a3.091 3.091 0 01-.748 1.149 3.09 3.09 0 01-1.15.747c-.352.138-.881.3-1.856.345-1.054.048-1.371.058-4.041.058-2.67 0-2.987-.01-4.04-.058-.976-.045-1.505-.208-1.858-.345a3.098 3.098 0 01-1.15-.748 3.1 3.1 0 01-.748-1.15c-.137-.351-.3-.88-.345-1.855-.047-1.055-.057-1.371-.057-4.042 0-2.67.01-2.985.057-4.04.045-.974.208-1.503.345-1.856.181-.467.398-.8.748-1.15.35-.35.683-.567 1.15-.748.353-.138.882-.3 1.857-.345.923-.042 1.28-.054 3.144-.056v.002zm6.235 1.66a1.2 1.2 0 100 2.401 1.2 1.2 0 000-2.4zM10 4.866a5.136 5.136 0 100 10.271 5.136 5.136 0 000-10.271zm0 1.802a3.333 3.333 0 110 6.666 3.333 3.333 0 010-6.666z"
        fill={color || "var(--expo-theme-icon-default)"}
      />
    </svg>
  );
}
