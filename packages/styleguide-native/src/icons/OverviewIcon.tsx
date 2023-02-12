import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
} & SvgProps;
function SvgOverviewIcon(props: Props) {
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
        d="M1 0.875H7.75C7.81904 0.875 7.875 0.930964 7.875 1V7.75C7.875 7.81904 7.81904 7.875 7.75 7.875H1C0.930964 7.875 0.875 7.81904 0.875 7.75V1C0.875 0.930964 0.930964 0.875 1 0.875ZM1 12.125H7.75C7.81904 12.125 7.875 12.181 7.875 12.25V19C7.875 19.069 7.81904 19.125 7.75 19.125H1C0.930964 19.125 0.875 19.069 0.875 19V12.25C0.875 12.181 0.930964 12.125 1 12.125ZM12.25 12.125H19C19.069 12.125 19.125 12.181 19.125 12.25V19C19.125 19.069 19.069 19.125 19 19.125H12.25C12.181 19.125 12.125 19.069 12.125 19V12.25C12.125 12.181 12.181 12.125 12.25 12.125ZM12.25 0.875H19C19.069 0.875 19.125 0.930964 19.125 1V7.75C19.125 7.81904 19.069 7.875 19 7.875H12.25C12.181 7.875 12.125 7.81904 12.125 7.75V1C12.125 0.930964 12.181 0.875 12.25 0.875Z"
        stroke={color || "#000"}
        strokeWidth={1.75}
      />
    </Svg>
  );
}
export default SvgOverviewIcon;
