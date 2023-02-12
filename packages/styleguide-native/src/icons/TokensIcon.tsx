import * as React from "react";
import Svg, { SvgProps, Circle, Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
} & SvgProps;
function SvgTokensIcon(props: Props) {
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
      <Circle
        cx={13.5}
        cy={10}
        r={5.625}
        stroke={color || "#000"}
        strokeWidth={1.75}
      />
      <Path
        d="M16.1315 10.0001C16.1315 8.54671 14.9534 7.36853 13.5 7.36853"
        stroke={color || "#000"}
        strokeWidth={1.5}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.59438 14.2645C7.9626 14.5754 7.25169 14.75 6.5 14.75C3.87665 14.75 1.75 12.6234 1.75 10C1.75 7.37665 3.87665 5.25 6.5 5.25C7.25169 5.25 7.9626 5.42461 8.59438 5.73548C9.0018 5.26721 9.47516 4.85784 10 4.52182C8.9897 3.875 7.78864 3.5 6.5 3.5C2.91015 3.5 0 6.41015 0 10C0 13.5899 2.91015 16.5 6.5 16.5C7.78864 16.5 8.9897 16.125 10 15.4782C9.47516 15.1422 9.0018 14.7328 8.59438 14.2645Z"
        fill={color || "#000"}
      />
    </Svg>
  );
}
export default SvgTokensIcon;
