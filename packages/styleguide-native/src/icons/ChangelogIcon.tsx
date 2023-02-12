import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
} & SvgProps;
function SvgChangelogIcon(props: Props) {
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
        d="M2.5 12.8572H17.5"
        stroke={color || "#000"}
        strokeWidth={2.14286}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2.5 17.1429H17.5"
        stroke={color || "#000"}
        strokeWidth={2.14286}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.0713 2.85715H3.92857C3.13959 2.85715 2.5 3.49674 2.5 4.28572V7.14286C2.5 7.93184 3.13959 8.57143 3.92857 8.57143H16.0713C16.8603 8.57143 17.4999 7.93184 17.4999 7.14286V4.28572C17.4999 3.49674 16.8603 2.85715 16.0713 2.85715Z"
        stroke={color || "#000"}
        strokeWidth={2.14286}
      />
    </Svg>
  );
}
export default SvgChangelogIcon;
