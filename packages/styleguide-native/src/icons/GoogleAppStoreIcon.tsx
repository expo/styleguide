import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
} & SvgProps;
function SvgGoogleAppStoreIcon(props: Props) {
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
        d="M0.706583 0.501622L10.3761 9.95333L0.698298 19.4643C0.629961 19.3302 0.590698 19.1767 0.590698 19.0098V0.972026C0.590698 0.798416 0.63315 0.639372 0.706583 0.501622ZM1.59391 -0.0294189C1.75559 -0.0290964 1.92147 0.0112703 2.07873 0.0992015L13.7581 6.62965L11.0895 9.25226L1.59391 -0.0294189ZM14.6675 7.13808L11.8048 9.95141L14.8179 12.8967L18.3581 10.9553C19.0471 10.5775 19.0511 9.58918 18.3653 9.20569L14.6675 7.13808ZM13.9015 13.3993L11.0914 10.6525L1.56867 20.011C1.73572 20.0149 1.90808 19.9763 2.07153 19.8867L13.9015 13.3993Z"
        fill={color || "#000"}
      />
    </Svg>
  );
}
export default SvgGoogleAppStoreIcon;
