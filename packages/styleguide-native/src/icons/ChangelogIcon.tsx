import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../types";
export default function ChangelogIcon(props: IconProps) {
  const { size, color, width, height } = props;
  return (
    <Svg
      viewBox="0 0 20 20"
      fill="none"
      width={size || width || 20}
      height={size || height || 20}
      {...props}
    >
      <Path
        d="M2.5 12.857h15m-15 4.286h15"
        stroke={color || "#000"}
        strokeWidth={2.143}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.071 2.857H3.93c-.79 0-1.429.64-1.429 1.429v2.857c0 .789.64 1.428 1.429 1.428h12.14c.79 0 1.429-.64 1.429-1.428V4.286c0-.79-.64-1.429-1.429-1.429z"
        stroke={color || "#000"}
        strokeWidth={2.143}
      />
    </Svg>
  );
}
