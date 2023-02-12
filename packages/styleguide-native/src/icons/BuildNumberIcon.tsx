import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
} & SvgProps;
function SvgBuildNumberIcon(props: Props) {
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
        d="M4 0C1.79086 0 0 1.79086 0 4V16C0 16.4494 0.0741222 16.8816 0.210809 17.2848L5.43494 12.0607C5.01575 11.1343 4.88882 10.1022 5.07108 9.10191C5.25334 8.1016 5.73613 7.18059 6.4551 6.46162C7.17407 5.74264 8.09509 5.25986 9.0954 5.0776C10.0957 4.89534 11.1278 5.02226 12.0542 5.44146L8.91962 8.576L8.91128 8.58434C8.75853 8.74017 8.67298 8.94968 8.67298 9.16789C8.67298 9.38611 8.75853 9.59562 8.91128 9.75145L10.2451 11.0853C10.401 11.238 10.6105 11.3236 10.8287 11.3236C11.0469 11.3236 11.2564 11.238 11.4122 11.0853L14.5551 7.94242C14.9743 8.86877 15.1012 9.90087 14.919 10.9012C14.7367 11.9015 14.2539 12.8225 13.535 13.5415C12.816 14.2605 11.895 14.7432 10.8947 14.9255C9.89436 15.1078 8.86225 14.9808 7.9359 14.5616L2.71009 19.7875C3.1148 19.9253 3.54867 20 4 20H16C18.2091 20 20 18.2091 20 16V4C20 1.79086 18.2091 0 16 0H4Z"
        fill={color || "#000"}
      />
    </Svg>
  );
}
export default SvgBuildNumberIcon;
