import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
} & SvgProps;
function SvgOpenInternalIcon(props: Props) {
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
        d="M6.2796 4.52368L15.0592 13.3033L17.6931 1.8898L6.2796 4.52368Z"
        fill={color || "#000"}
      />
      <Path
        d="M10.6694 8.91348L1.8898 17.6931"
        stroke={color || "#000"}
        strokeWidth={2.05719}
        strokeLinecap="round"
      />
    </Svg>
  );
}
export default SvgOpenInternalIcon;
