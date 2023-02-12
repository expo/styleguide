import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
} & SvgProps;
function SvgBellIcon(props: Props) {
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
        d="M10 19.5238C11.315 19.5238 12.381 18.4578 12.381 17.1429H7.61905C7.61905 18.4578 8.68504 19.5238 10 19.5238Z"
        fill={color || "#000"}
      />
      <Path
        d="M11.1847 1.78457C11.1885 1.74579 11.1905 1.70646 11.1905 1.66667C11.1905 1.00919 10.6575 0.476196 10 0.476196C9.34252 0.476196 8.80953 1.00919 8.80953 1.66667C8.80953 1.70646 8.81148 1.74579 8.81529 1.78458C6.09548 2.33387 4.04765 4.73731 4.04765 7.61905C4.04765 8.92573 3.45239 14.7619 1.66667 15.9524H18.3333C16.5476 14.7619 15.9524 8.92573 15.9524 7.61905C15.9524 4.7373 13.9046 2.33384 11.1847 1.78457Z"
        fill={color || "#000"}
      />
    </Svg>
  );
}
export default SvgBellIcon;
