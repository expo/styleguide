import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
} & SvgProps;
function SvgMailIcon(props: Props) {
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
        d="M16.6667 3.33337H3.33335C2.70884 3.33337 2.16169 3.68148 1.87636 4.19325C1.96988 4.21754 2.06074 4.25864 2.14455 4.31731L10 9.81612L17.8554 4.31731C17.9393 4.25863 18.0301 4.21753 18.1237 4.19324C17.8383 3.68148 17.2912 3.33337 16.6667 3.33337ZM18.3334 6.0172L10.4779 11.516C10.191 11.7169 9.80905 11.7169 9.52211 11.516L1.66669 6.01723V15C1.66669 15.9167 2.41669 16.6667 3.33335 16.6667H16.6667C17.5834 16.6667 18.3334 15.9167 18.3334 15V6.0172Z"
        fill={color || "#000"}
      />
    </Svg>
  );
}
export default SvgMailIcon;
