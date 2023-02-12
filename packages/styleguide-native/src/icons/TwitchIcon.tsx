import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
} & SvgProps;
function SvgTwitchIcon(props: Props) {
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
        d="M4.82143 0L1.25 3.57143V16.4286H5.53571V20L9.10714 16.4286H11.9643L18.3929 10V0H4.82143ZM16.9643 9.28571L14.1071 12.1429H11.25L8.75 14.6429V12.1429H5.53571V1.42857H16.9643V9.28571Z"
        fill={color || "#000"}
      />
      <Path
        d="M14.8215 3.92857H13.3929V8.21429H14.8215V3.92857Z"
        fill={color || "#000"}
      />
      <Path
        d="M10.8928 3.92857H9.46424V8.21429H10.8928V3.92857Z"
        fill={color || "#000"}
      />
    </Svg>
  );
}
export default SvgTwitchIcon;
