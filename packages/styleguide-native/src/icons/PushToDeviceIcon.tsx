import * as React from "react";
import Svg, { SvgProps, Path, Rect } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
} & SvgProps;
function SvgPushToDeviceIcon(props: Props) {
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
        d="M8.16436 7.57068L8.16436 14.3865L13.617 10.9786L8.16436 7.57068Z"
        fill={color || "#000"}
      />
      <Path
        d="M8.16434 11.0789L1.14806 11.0789"
        stroke={color || "#000"}
        strokeWidth={1.50349}
        strokeLinecap="round"
      />
      <Path
        d="M4.68959 13.3508V17.8947C4.68959 19.1494 5.70677 20.1666 6.96153 20.1666H14.9133C16.1681 20.1666 17.1853 19.1494 17.1853 17.8947V4.26303C17.1853 3.00827 16.1681 1.99109 14.9133 1.99109H6.96153C5.70677 1.99109 4.68959 3.00827 4.68959 4.26303V8.80691"
        stroke={color || "#000"}
        strokeWidth={2.00465}
      />
      <Rect
        x={8.16434}
        y={1.05554}
        width={6.01396}
        height={3.00698}
        rx={1.00233}
        fill={color || "#000"}
      />
    </Svg>
  );
}
export default SvgPushToDeviceIcon;
