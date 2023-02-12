import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
} & SvgProps;
function SvgLogoutMobileIcon(props: Props) {
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
        d="M14.1036 3.73897V3.70715C14.1036 2.58021 13.1901 1.66666 12.0631 1.66666H3.63454C2.50761 1.66666 1.59406 2.58021 1.59406 3.70714V16.2929C1.59406 17.4198 2.50761 18.3333 3.63454 18.3333H12.2256C13.2628 18.3333 14.1036 17.4925 14.1036 16.4554V16.4554"
        stroke={color || "#000"}
        strokeWidth={2.04049}
      />
      <Path
        d="M13.071 15.2266V12.0576C10.2389 12.0576 8.24023 13.167 7.24432 14.017C7.06231 14.1724 6.75003 14.0429 6.76856 13.8043C7.13162 9.13151 11.0598 7.87801 13.071 7.84795V4.7735L20.0726 10.071L13.071 15.2266Z"
        fill={color || "#000"}
      />
    </Svg>
  );
}
export default SvgLogoutMobileIcon;
