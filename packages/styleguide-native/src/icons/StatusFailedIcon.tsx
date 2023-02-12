import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
} & SvgProps;
function SvgStatusFailedIcon(props: Props) {
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
        d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM6.46446 13.5355C6.07394 13.145 6.07394 12.5118 6.46446 12.1213L8.58579 9.99994L6.46447 7.87862C6.07394 7.4881 6.07395 6.85493 6.46447 6.46441C6.85499 6.07388 7.48816 6.07388 7.87868 6.46441L10 8.58573L12.1213 6.46441C12.5118 6.07388 13.145 6.07388 13.5355 6.46441C13.9261 6.85493 13.9261 7.4881 13.5355 7.87862L11.4142 9.99994L13.5355 12.1213C13.9261 12.5118 13.9261 13.145 13.5355 13.5355C13.145 13.926 12.5118 13.926 12.1213 13.5355L10 11.4142L7.87868 13.5355C7.48815 13.926 6.85499 13.926 6.46446 13.5355Z"
        fill={color || "#000"}
      />
    </Svg>
  );
}
export default SvgStatusFailedIcon;
