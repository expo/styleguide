import * as React from "react";
import Svg, { SvgProps, Path, Rect } from "react-native-svg";
import { IconProps } from "../types";
export default function PushToDeviceIcon(props: SvgProps & IconProps) {
  const { size, color, width, height } = props;
  return (
    <Svg
      width={size || width || 20}
      height={size || height || 20}
      viewBox="0 0 20 22"
      fill="none"
      {...props}
    >
      <Path
        d="M8.164 7.57v6.816l5.453-3.407L8.164 7.57z"
        fill={color || "#000"}
      />
      <Path
        d="M8.164 11.079H1.148"
        stroke={color || "#000"}
        strokeWidth={1.503}
        strokeLinecap="round"
      />
      <Path
        d="M4.69 13.35v4.545a2.272 2.272 0 002.272 2.272h7.951a2.272 2.272 0 002.272-2.272V4.263a2.272 2.272 0 00-2.272-2.272H6.962A2.272 2.272 0 004.69 4.263v4.544"
        stroke={color || "#000"}
        strokeWidth={2.005}
      />
      <Rect
        x={8.164}
        y={1.056}
        width={6.014}
        height={3.007}
        rx={1.002}
        fill={color || "#000"}
      />
    </Svg>
  );
}
