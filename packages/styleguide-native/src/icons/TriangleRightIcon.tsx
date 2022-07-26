import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../types";
export default function TriangleRightIcon(props: IconProps) {
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
        d="M7.43 3.117v13.766L14.313 10 7.43 3.117z"
        fill={color || "#000"}
      />
    </Svg>
  );
}
