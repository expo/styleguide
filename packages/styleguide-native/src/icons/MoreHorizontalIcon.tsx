import * as React from "react";
import Svg, { SvgProps, Circle } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
} & SvgProps;
function SvgMoreHorizontalIcon(props: Props) {
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
      <Circle cx={4.16675} cy={10} r={1.74072} fill={color || "#000"} />
      <Circle cx={9.99976} cy={10} r={1.74072} fill={color || "#000"} />
      <Circle cx={15.8333} cy={10} r={1.74072} fill={color || "#000"} />
    </Svg>
  );
}
export default SvgMoreHorizontalIcon;
