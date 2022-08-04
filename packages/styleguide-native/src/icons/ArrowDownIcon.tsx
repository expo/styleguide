import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../types";
export default function ArrowDownIcon(props: IconProps) {
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
        d="M10 4.167v11.666m0 0L4.167 10M10 15.833L15.833 10"
        stroke={color || "#000"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
