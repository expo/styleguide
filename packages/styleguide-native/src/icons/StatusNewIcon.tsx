import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
} & SvgProps;
function SvgStatusNewIcon(props: Props) {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 10C0 4.5 4.5 0 10 0C15.5 0 20 4.5 20 10C20 15.5 15.5 20 10 20C4.5 20 0 15.5 0 10ZM4 10C4 6.7 6.7 4 10 4C13.3 4 16 6.7 16 10C16 13.3 13.3 16 10 16C6.7 16 4 13.3 4 10Z"
        fill={color || "#000"}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 6C7.8 6 6 7.8 6 10C6 12.2 7.8 14 10 14C12.2 14 14 12.2 14 10C14 7.8 12.2 6 10 6Z"
        fill={color || "#000"}
      />
    </Svg>
  );
}
export default SvgStatusNewIcon;
