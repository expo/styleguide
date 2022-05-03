import * as React from "react";
import Svg, { SvgProps, Circle, Path } from "react-native-svg";
import { IconProps } from "../types";
export default function ThemeAutoIcon(props: SvgProps & IconProps) {
  const { size, color, width, height } = props;
  return (
    <Svg
      width={size || width || 20}
      height={size || height || 20}
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <Circle
        cx={10}
        cy={10}
        r={7.755}
        stroke={color || "#000"}
        strokeWidth={1.157}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 1.667a8.333 8.333 0 100 16.666V1.667z"
        fill={color || "#000"}
      />
    </Svg>
  );
}
