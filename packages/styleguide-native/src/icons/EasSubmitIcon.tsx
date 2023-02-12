import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath, Rect } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
} & SvgProps;
function SvgEasSubmitIcon(props: Props) {
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
      <G clipPath="url(#clip0_3474_2527)">
        <Path
          d="M18 8C18 7.44772 17.5523 7 17 7C16.4477 7 16 7.44772 16 8H18ZM17 18V19H18V18H17ZM3 18H2V19H3V18ZM4 8C4 7.44772 3.55228 7 3 7C2.44772 7 2 7.44772 2 8H4ZM6.5 19H7.5V17H6.5V19ZM13.5 17H12.5V19H13.5V17ZM16 8V18H18V8H16ZM4 18V8H2V18H4ZM3 19H6.5V17H3V19ZM17 17H13.5V19H17V17Z"
          fill={color || "#000"}
        />
        <Path
          d="M1 6.05263L3.21264 2H8L7.1954 6.05263C7.1954 6.05263 6.21264 7.5 4 7.5C1.78736 7.5 1 6.05263 1 6.05263Z"
          stroke={color || "#000"}
          strokeWidth={2}
        />
        <Path
          d="M19 6.05263L16.7874 2H12L12.8046 6.05263C12.8046 6.05263 13.7874 7.5 16 7.5C18.2126 7.5 19 6.05263 19 6.05263Z"
          stroke={color || "#000"}
          strokeWidth={2}
        />
        <Path
          d="M13 6.5L12.0909 2H10H7.90909L7 6.5C7 6.5 7.5 7.94737 10 7.94737C12.5 7.94737 13 6.5 13 6.5Z"
          stroke={color || "#000"}
          strokeWidth={2}
        />
        <Path
          d="M10 19V11M10 11L13 14M10 11L7 14"
          stroke={color || "#000"}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_3474_2527">
          <Rect width={20} height={20} fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
export default SvgEasSubmitIcon;
