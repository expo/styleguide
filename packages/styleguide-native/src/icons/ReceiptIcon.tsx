import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
} & SvgProps;
function SvgReceiptIcon(props: Props) {
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
        d="M2.40217 19H2V18V9V1H18V9V18V19H17.7067L16.3445 17.7604L15.7065 17.1798L15.0386 17.7257L13.8424 18.7034L12.6765 17.7318L12.0363 17.1983L11.3961 17.7318L10.2363 18.6983L9.07646 17.7318L8.43627 17.1983L7.79609 17.7318L6.63627 18.6983L5.47646 17.7318L4.88545 17.2393L4.25788 17.6842L2.40217 19Z"
        stroke={color || "#000"}
        strokeWidth={2}
      />
      <Path
        d="M14.1723 5.75H14.9223V4.25H14.1723V5.75ZM5 5.75H14.1723V4.25H5V5.75Z"
        fill={color || "#000"}
      />
      <Path
        d="M14.1723 8.75H14.9223V7.25H14.1723V8.75ZM5 8.75H14.1723V7.25H5V8.75Z"
        fill={color || "#000"}
      />
      <Path
        d="M10.5034 11.75H11.2534V10.25H10.5034V11.75ZM5 11.75H10.5034V10.25H5V11.75Z"
        fill={color || "#000"}
      />
    </Svg>
  );
}
export default SvgReceiptIcon;
