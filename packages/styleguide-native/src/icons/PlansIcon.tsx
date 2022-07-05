import * as React from "react";
import Svg, { SvgProps, Path, Rect } from "react-native-svg";
import { IconProps } from "../types";
export default function PlansIcon(props: SvgProps & IconProps) {
  const { size, color, width, height } = props;
  return (
    <Svg
      viewBox="0 0 20 21"
      fill="none"
      width={size || width || 20}
      height={size || height || 20}
      {...props}
    >
      <Path
        d="M10 5.22l1.545 3.13L15 8.855l-2.5 2.435.59 3.44L10 13.105 6.91 14.73l.59-3.44L5 8.855l3.455-.505L10 5.22z"
        stroke={color || "#000"}
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Rect
        x={0.875}
        y={2.009}
        width={18.25}
        height={16.423}
        rx={3.125}
        stroke={color || "#000"}
        strokeWidth={1.75}
      />
    </Svg>
  );
}
