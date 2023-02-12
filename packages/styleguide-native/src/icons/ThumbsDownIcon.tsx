import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
} & SvgProps;
function SvgThumbsDownIcon(props: Props) {
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
        d="M8.9995 17.34L6.07949 10.88C6.02562 10.7599 5.99839 10.6305 5.99949 10.5V2.9C5.99949 2.39609 6.21021 1.91282 6.58528 1.5565C6.96035 1.20018 7.46906 1 7.9995 1H13.9995C14.7813 1.02963 15.5395 1.26227 16.1918 1.67262C16.8442 2.08297 17.3656 2.65533 17.6995 3.3275L19.9295 8.22C19.98 8.34079 20.0038 8.47012 19.9995 8.6V10.5C19.9995 11.2559 19.6835 11.9808 19.1209 12.5153C18.5582 13.0497 17.7952 13.35 16.9995 13.35H12.9995V17.15C12.9995 17.9059 12.6834 18.6308 12.1208 19.1653C11.5582 19.6997 10.7952 20 9.9995 20C9.73429 20 9.47993 19.8999 9.29239 19.7218C9.10486 19.5436 8.9995 19.302 8.9995 19.05V17.34Z"
        fill={color || "#000"}
      />
      <Path
        d="M1.00003 11.5H3.00004C3.55233 11.5 4.00004 11.0747 4.00004 10.55V2C4.00004 1.47533 3.55233 1.05 3.00004 1.05H1.00003C0.447748 1.05 3.05176e-05 1.47533 3.05176e-05 2V10.55C3.05176e-05 11.0747 0.447748 11.5 1.00003 11.5Z"
        fill={color || "#000"}
      />
    </Svg>
  );
}
export default SvgThumbsDownIcon;
