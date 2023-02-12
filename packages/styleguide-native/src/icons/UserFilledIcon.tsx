import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
} & SvgProps;
function SvgUserFilledIcon(props: Props) {
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
        d="M13.3654 13.8889C16.4726 9.27349 16.9957 -1.52588e-05 10.0019 -1.52588e-05C3.00808 -1.52588e-05 3.52595 9.27349 6.63315 13.8889C3.86108 13.8889 0.676836 16.3038 0.0222019 19.0096C-0.10774 19.5467 0.351493 20 0.909211 20H19.091C19.6481 20 20.1071 19.5477 19.9781 19.0111C19.3271 16.3047 16.138 13.8889 13.3654 13.8889Z"
        fill={color || "#000"}
      />
    </Svg>
  );
}
export default SvgUserFilledIcon;
