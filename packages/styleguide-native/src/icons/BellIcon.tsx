import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../types";
export default function BellIcon(props: IconProps) {
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
        d="M10 19.524a2.381 2.381 0 002.381-2.381H7.619A2.38 2.38 0 0010 19.523zm1.185-17.739a1.19 1.19 0 10-2.37 0 5.954 5.954 0 00-4.767 5.834c0 1.307-.596 7.143-2.381 8.333h16.666c-1.785-1.19-2.38-7.026-2.38-8.333a5.954 5.954 0 00-4.768-5.834z"
        fill={color || "#000"}
      />
    </Svg>
  );
}
