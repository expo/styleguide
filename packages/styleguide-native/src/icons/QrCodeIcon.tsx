import * as React from "react";
import Svg, { SvgProps, Rect, Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
} & SvgProps;
function SvgQrCodeIcon(props: Props) {
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
      <Rect
        x={1.01752}
        y={14}
        width={5}
        height={5}
        stroke={color || "#000"}
        strokeWidth={2}
      />
      <Rect
        x={1.01752}
        y={1}
        width={5}
        height={5}
        stroke={color || "#000"}
        strokeWidth={2}
      />
      <Rect
        x={14}
        y={1}
        width={5}
        height={5}
        stroke={color || "#000"}
        strokeWidth={2}
      />
      <Path d="M0.442627 12V8.5H8.49998V5H9.99998" stroke={color || "#000"} />
      <Path d="M2.5 10V11.5H6.5V10" stroke={color || "#000"} />
      <Path
        d="M7.99481 0.5H11.5V3H8.00002M11.5 7V4.5"
        stroke={color || "#000"}
      />
      <Path
        d="M10.5024 20.0202L10.5 14.5H8.49036L8.49272 11.5027H10.5024V8.49634H13.5V11"
        stroke={color || "#000"}
      />
      <Path d="M8.49777 20L8.5 16" stroke={color || "#000"} />
      <Path d="M12.5 14.05V19.5H19.5V14.05" stroke={color || "#000"} />
      <Path
        d="M12 12.5H14.5V14.5H17.5V12.5H19.5001V8"
        stroke={color || "#000"}
      />
      <Path d="M15.5 8L15.5 10.5L18 10.5" stroke={color || "#000"} />
      <Path d="M17.5 18L17.5 16.5L14.5 16.5L14.5 18" stroke={color || "#000"} />
    </Svg>
  );
}
export default SvgQrCodeIcon;
