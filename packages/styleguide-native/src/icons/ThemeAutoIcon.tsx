import * as React from "react";
import Svg, { SvgProps, Circle, Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
} & SvgProps;
function SvgThemeAutoIcon(props: Props) {
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
        cx={10}
        cy={10}
        r={7.75463}
        stroke={color || "#000"}
        strokeWidth={1.15741}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 1.66667C5.39765 1.66667 1.66667 5.39759 1.66667 9.99992C1.66667 14.6022 5.39765 18.3332 10 18.3332V1.66667Z"
        fill={color || "#000"}
      />
    </Svg>
  );
}
export default SvgThemeAutoIcon;
