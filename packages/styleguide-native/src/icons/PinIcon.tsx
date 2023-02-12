import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
} & SvgProps;
function SvgPinIcon(props: Props) {
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
        d="M15.755 14.3367L14.302 16.8535L9.26845 13.9473L6.36236 18.9808L5.03909 19.3354L4.68453 18.0121L7.59062 12.9786L2.55713 10.0726L4.01018 7.55583C4.54517 6.62919 5.73007 6.3117 6.65671 6.8467L9.5628 1.81314C10.0978 0.886495 11.2827 0.569005 12.2093 1.104L17.2428 4.0101C18.1695 4.54509 18.487 5.72999 17.952 6.65663L15.0459 11.6902C15.9725 12.2252 16.29 13.4101 15.755 14.3367Z"
        fill={color || "#000"}
      />
    </Svg>
  );
}
export default SvgPinIcon;
