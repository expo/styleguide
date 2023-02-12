import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
} & SvgProps;
function SvgCodeIcon(props: Props) {
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
        d="M4.99802 14.403L1.074 10.3154C0.74804 9.9759 0.74804 9.42707 1.074 9.08748L4.99802 5L6.17681 6.2279L2.84219 9.70148L6.17681 13.1751L4.99802 14.403Z"
        fill={color || "#000"}
      />
      <Path
        d="M15.002 14.403L13.8232 13.1751L17.1578 9.70148L13.8232 6.2279L15.002 5L18.926 9.08748C19.252 9.42707 19.252 9.9759 18.926 10.3154L15.002 14.403Z"
        fill={color || "#000"}
      />
      <Path
        d="M11.0625 2L7.3208 17.579L8.9383 18.0005L12.6799 2.42152L11.0625 2Z"
        fill={color || "#000"}
      />
    </Svg>
  );
}
export default SvgCodeIcon;
