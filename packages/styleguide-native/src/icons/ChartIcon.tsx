import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../types";
export default function ChartIcon(props: IconProps) {
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
        d="M18.928 18.887H1.072V1.147"
        stroke={color || "#000"}
        strokeWidth={2}
        strokeLinecap="round"
      />
      <Path
        d="M4.477 12.993L9.22 7.007l4.329 5.763 4.565-5.763"
        stroke={color || "#000"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
