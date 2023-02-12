import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
} & SvgProps;
function SvgThumbsUpIcon(props: Props) {
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
        d="M11.0005 3.66L13.9205 10.12C13.9744 10.2401 14.0016 10.3695 14.0005 10.5V18.1C14.0005 18.6039 13.7898 19.0872 13.4147 19.4435C13.0397 19.7998 12.531 20 12.0005 20H6.00051C5.21875 19.9704 4.4605 19.7377 3.80817 19.3274C3.15585 18.917 2.63439 18.3447 2.30049 17.6725L0.0704874 12.78C0.0200426 12.6592 -0.00378189 12.5299 0.000487194 12.4V10.5C0.000487194 9.74413 0.316559 9.01922 0.87917 8.48475C1.44178 7.95027 2.20484 7.65 3.0005 7.65H7.00051V3.85C7.00051 3.09413 7.31658 2.36922 7.87919 1.83475C8.4418 1.30027 9.20487 1 10.0005 1C10.2657 1 10.5201 1.10009 10.7076 1.27825C10.8952 1.45641 11.0005 1.69804 11.0005 1.95V3.66Z"
        fill={color || "#000"}
      />
      <Path
        d="M19 9.5H17C16.4477 9.5 16 9.92533 16 10.45V19C16 19.5247 16.4477 19.95 17 19.95H19C19.5523 19.95 20 19.5247 20 19V10.45C20 9.92533 19.5523 9.5 19 9.5Z"
        fill={color || "#000"}
      />
    </Svg>
  );
}
export default SvgThumbsUpIcon;
