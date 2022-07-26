import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../types";
export default function ArrowLeftIcon(props: IconProps) {
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
        d="M15.833 10H4.167M10 15.833L4.167 10 10 4.167"
        stroke={color || "#000"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
