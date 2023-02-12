import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
} & SvgProps;
function SvgDatabaseIcon(props: Props) {
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
        d="M10 6.66663C14.1421 6.66663 17.5 5.54734 17.5 4.16663C17.5 2.78591 14.1421 1.66663 10 1.66663C5.85786 1.66663 2.5 2.78591 2.5 4.16663C2.5 5.54734 5.85786 6.66663 10 6.66663Z"
        stroke={color || "#000"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.5 10C17.5 11.3833 14.1667 12.5 10 12.5C5.83333 12.5 2.5 11.3833 2.5 10"
        stroke={color || "#000"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2.5 4.16663V15.8333C2.5 17.2166 5.83333 18.3333 10 18.3333C14.1667 18.3333 17.5 17.2166 17.5 15.8333V4.16663"
        stroke={color || "#000"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
export default SvgDatabaseIcon;
