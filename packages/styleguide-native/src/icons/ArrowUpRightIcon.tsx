import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../types";
export default function ArrowUpRightIcon(props: IconProps) {
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
        d="M5.875 14.125l8.25-8.25m0 0v8.25m0-8.25h-8.25"
        stroke={color || "#000"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
