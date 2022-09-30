import React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import { IconProps } from "../types";
export default function MoreHorizontalIcon(props: IconProps) {
  const { size, color, width, height } = props;
  return (
    <Svg
      viewBox="0 0 20 20"
      fill="none"
      width={size || width || 20}
      height={size || height || 20}
      {...props}
    >
      <Circle cx={4.167} cy={10} r={1.741} fill={color || "#000"} />
      <Circle cx={10} cy={10} r={1.741} fill={color || "#000"} />
      <Circle cx={15.833} cy={10} r={1.741} fill={color || "#000"} />
    </Svg>
  );
}
