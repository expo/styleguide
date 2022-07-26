import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../types";
export default function DownloadIcon(props: IconProps) {
  const { size, color, width, height } = props;
  return (
    <Svg
      viewBox="0 0 20 22"
      fill="none"
      width={size || width || 20}
      height={size || height || 20}
      {...props}
    >
      <Path d="M14.583 11H5.417L10 18.333 14.583 11z" fill={color || "#000"} />
      <Path
        d="M1.75 20.167h16.5M10 11V1.833"
        stroke={color || "#000"}
        strokeWidth={1.833}
        strokeLinecap="round"
      />
    </Svg>
  );
}
