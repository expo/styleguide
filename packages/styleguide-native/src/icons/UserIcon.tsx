import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
} & SvgProps;
function SvgUserIcon(props: Props) {
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
        d="M12.9167 13.4028C15.609 9.36432 16.0622 1.25 10.0023 1.25C3.94231 1.25 4.39103 9.36432 7.08333 13.4028C4.39103 13.4028 1.25 16.0577 1.25 18.75H10.0023H18.75C18.7545 16.0577 15.609 13.4028 12.9167 13.4028Z"
        stroke={color || "#000"}
        strokeWidth={1.85185}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
export default SvgUserIcon;
