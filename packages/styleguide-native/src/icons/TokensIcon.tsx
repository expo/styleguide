import * as React from "react";
import Svg, { SvgProps, Circle, Path } from "react-native-svg";
import { IconProps } from "../types";
export default function TokensIcon(props: SvgProps & IconProps) {
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
        cx={13.5}
        cy={10}
        r={5.625}
        stroke={color || "#000"}
        strokeWidth={1.75}
      />
      <Path
        d="M16.131 10A2.631 2.631 0 0013.5 7.37"
        stroke={color || "#000"}
        strokeWidth={1.5}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.594 14.264a4.75 4.75 0 110-8.529A6.55 6.55 0 0110 4.522a6.5 6.5 0 100 10.956 6.533 6.533 0 01-1.406-1.213z"
        fill={color || "#000"}
      />
    </Svg>
  );
}
