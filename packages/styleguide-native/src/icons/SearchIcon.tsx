import * as React from "react";
import Svg, { SvgProps, Circle, Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
} & SvgProps;
function SvgSearchIcon(props: Props) {
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
      <Circle
        cx={8.38576}
        cy={7.85335}
        r={6.80624}
        stroke={color || "#000"}
        strokeWidth={2.09423}
      />
      <Path
        d="M13.0978 13.6124L18.3333 18.848"
        stroke={color || "#000"}
        strokeWidth={2.09423}
        strokeLinecap="round"
      />
    </Svg>
  );
}
export default SvgSearchIcon;
