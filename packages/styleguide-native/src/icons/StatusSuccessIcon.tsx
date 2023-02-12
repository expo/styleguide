import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
} & SvgProps;
function SvgStatusSuccessIcon(props: Props) {
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
        d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM8.66052 11.4142L6.56759 9.32123C6.17707 8.9307 5.54391 8.9307 5.15338 9.32123C4.76286 9.71175 4.76286 10.3449 5.15338 10.7354L7.95342 13.5355C8.34394 13.926 8.97711 13.926 9.36763 13.5355L15.0245 7.87862C15.415 7.4881 15.415 6.85493 15.0245 6.46441C14.634 6.07388 14.0008 6.07388 13.6103 6.46441L8.66052 11.4142Z"
        fill={color || "#000"}
      />
    </Svg>
  );
}
export default SvgStatusSuccessIcon;
