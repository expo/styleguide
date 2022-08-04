import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../types";
export default function TriangleUpIcon(props: IconProps) {
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
        d="M3.117 12.563h13.766L10 5.68l-6.883 6.883z"
        fill={color || "#000"}
      />
    </Svg>
  );
}
