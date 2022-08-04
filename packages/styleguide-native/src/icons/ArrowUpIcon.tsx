import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../types";
export default function ArrowUpIcon(props: IconProps) {
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
        d="M10 15.833V4.167m0 0L15.833 10M10 4.167L4.167 10"
        stroke={color || "#000"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
