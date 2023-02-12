import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
} & SvgProps;
function SvgInvoicesIcon(props: Props) {
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
        d="M1.6565 19.125H0.875V18V9V0.875H19.125V9V18V19.125H18.4457L16.8561 17.8231L16.3304 17.3926L15.7832 17.7952L14.2676 18.91L12.7875 17.8L12.2625 17.4062L11.7375 17.8L10.2625 18.9062L8.78753 17.8L8.26253 17.4062L7.73753 17.8L6.26253 18.9062L4.78753 17.8L4.30271 17.4364L3.79183 17.7624L1.6565 19.125Z"
        stroke={color || "#000"}
        strokeWidth={1.75}
      />
      <Path
        d="M15 5.75H15.75V4.25H15V5.75ZM4 5.75H15V4.25H4V5.75Z"
        fill={color || "#000"}
      />
      <Path
        d="M15 8.75H15.75V7.25H15V8.75ZM4 8.75H15V7.25H4V8.75Z"
        fill={color || "#000"}
      />
      <Path
        d="M11 11.75H11.75V10.25H11V11.75ZM4 11.75H11V10.25H4V11.75Z"
        fill={color || "#000"}
      />
    </Svg>
  );
}
export default SvgInvoicesIcon;
