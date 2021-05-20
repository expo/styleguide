import * as React from "react";
import Svg, { SvgProps, Rect, Path } from "react-native-svg";
import { IconProps } from "../../types";
export default function ChannelIcon(props: SvgProps & IconProps) {
  const { size, color, width, height } = props;
  return (
    <Svg
      width={size || width || 20}
      height={size || height || 20}
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <Rect
        x={7.083}
        y={0.833}
        width={5.833}
        height={5.833}
        rx={0.833}
        fill={color || "#000"}
      />
      <Rect
        x={1.667}
        y={13.333}
        width={5.833}
        height={5.833}
        rx={0.833}
        fill={color || "#000"}
      />
      <Rect
        x={12.5}
        y={13.333}
        width={5.833}
        height={5.833}
        rx={0.833}
        fill={color || "#000"}
      />
      <Path
        d="M10 4.693v3.224c0 .92-.747 1.666-1.667 1.666H6.25c-.92 0-1.667.746-1.667 1.667v2.48M10 4.693v3.224c0 .92.746 1.666 1.667 1.666h2.083c.92 0 1.667.746 1.667 1.667v2.962"
        stroke={color || "#000"}
        strokeWidth={0.833}
      />
    </Svg>
  );
}
