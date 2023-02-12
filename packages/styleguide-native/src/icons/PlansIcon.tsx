import * as React from "react";
import Svg, { SvgProps, Path, Rect } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
} & SvgProps;
function SvgPlansIcon(props: Props) {
  const { size, color, width = 24, height = 24 } = props;
  let _width = width;
  let _height = height;
  const sizes: {
    [i: string]: number;
  } = {
    xs: 16,
    sm: 20,
    md: 24,
    lg: 28,
    xl: 32,
  };
  if (size && typeof size === "string" && sizes[size]) {
    _width = sizes[size];
    _height = sizes[size];
  }
  return (
    <Svg width={_width} height={_height} fill="none" {...props}>
      <Path
        d="M10 5.22034L11.545 8.35034L15 8.85534L12.5 11.2903L13.09 14.7303L10 13.1053L6.91 14.7303L7.5 11.2903L5 8.85534L8.455 8.35034L10 5.22034Z"
        stroke={color || "#000"}
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Rect
        x={0.875}
        y={2.00867}
        width={18.25}
        height={16.4233}
        rx={3.125}
        stroke={color || "#000"}
        strokeWidth={1.75}
      />
    </Svg>
  );
}
export default SvgPlansIcon;
