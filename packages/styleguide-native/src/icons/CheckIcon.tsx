import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../types";
export default function CheckIcon(props: IconProps) {
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
        d="M16.667 5L7.5 14.167 3.333 10"
        stroke={color || "#000"}
        strokeWidth={2.051}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
