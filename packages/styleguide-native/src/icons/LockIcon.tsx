import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
} & SvgProps;
function SvgLockIcon(props: Props) {
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
        d="M4.99819 5.81393V5.36288C4.99819 4.02584 5.48146 2.75324 6.38355 1.81893C7.26954 0.852398 8.4777 0.336914 9.7342 0.336914H9.89528C12.521 0.336914 14.6313 2.59215 14.6313 5.36288V7.26372C14.0192 7.02209 13.2781 6.94155 12.6016 6.97376V5.36288C12.6016 3.78421 11.3934 2.4955 9.91139 2.4955H9.7342C8.23607 2.4955 7.02791 3.78421 7.02791 5.36288V5.79782C7.02791 6.34552 6.64129 6.81268 6.12581 6.861H6.1097C5.96725 6.87939 5.82249 6.8658 5.68595 6.82121C5.54941 6.77663 5.42452 6.70217 5.32037 6.60326C5.21465 6.49802 5.13155 6.37229 5.07615 6.23379C5.02075 6.09529 4.99422 5.94693 4.99819 5.79782V5.81393Z"
        fill={color || "#000"}
      />
      <Path
        d="M16.9993 17.7934V10.0934C17.0062 9.83822 16.9251 9.58848 16.7697 9.38607C16.6142 9.18367 16.3938 9.04093 16.1455 8.98184L16.0488 8.96573C11.8916 8.12828 7.609 8.12828 3.45172 8.96573L3.37117 8.98184C3.1199 9.03773 2.89581 9.1791 2.73717 9.38181C2.57852 9.58452 2.49515 9.83602 2.50129 10.0934V17.7934C2.50129 18.325 2.85569 18.7921 3.37117 18.9049L4.01553 19.0338C7.80099 19.7931 11.6996 19.7931 15.485 19.0338L16.1294 18.9049C16.3835 18.8485 16.6097 18.7048 16.7686 18.4987C16.9276 18.2926 17.0092 18.0373 16.9993 17.7773V17.7934Z"
        fill={color || "#000"}
      />
    </Svg>
  );
}
export default SvgLockIcon;
