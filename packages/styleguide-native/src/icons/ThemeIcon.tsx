import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
} & SvgProps;
function SvgThemeIcon(props: Props) {
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
        d="M20 16C20 18.2091 18.2091 20 16 20H4C1.79086 20 0 18.2091 0 16V4C0 1.79086 1.79086 0 4 0H16C18.2091 0 20 1.79086 20 4V16ZM2.60264 17.4309L17.4145 2.58606C17.0525 2.22397 16.5524 2 16 2H4C2.89543 2 2 2.89543 2 4V16C2 16.5608 2.23082 17.0677 2.60264 17.4309Z"
        fill={color || "#000"}
      />
    </Svg>
  );
}
export default SvgThemeIcon;
