import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../types";
export default function TriangleLeftIcon(props: IconProps) {
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
        d="M12.567 16.883V3.117L5.684 10l6.883 6.883z"
        fill={color || "#000"}
      />
    </Svg>
  );
}
