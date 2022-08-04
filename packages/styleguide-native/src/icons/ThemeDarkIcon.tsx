import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../types";
export default function ThemeDarkIcon(props: IconProps) {
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
        d="M9.157 0a10.056 10.056 0 00-3.285 1.199C1.054 3.98-.598 10.142 2.185 14.96c2.782 4.819 8.943 6.47 13.762 3.688a10.048 10.048 0 002.86-2.466A10.079 10.079 0 018.33 11.297 10.078 10.078 0 019.157 0z"
        fill={color || "#000"}
      />
    </Svg>
  );
}
