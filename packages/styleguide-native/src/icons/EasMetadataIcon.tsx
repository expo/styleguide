import * as React from "react";
import Svg, { SvgProps, G, Path, Rect, Defs, ClipPath } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
} & SvgProps;
function SvgEasMetadataIcon(props: Props) {
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
      <G clipPath="url(#clip0_3475_2492)">
        <Path
          d="M3 8.31909V17.5H5H15H17V8.31909"
          stroke={color || "#000"}
          strokeWidth={2}
          strokeLinecap="round"
        />
        <Path
          d="M1 6.52459L3.21264 1.5H8L7.1954 6.52459C7.1954 6.52459 6.21264 8.31909 4 8.31909C1.78736 8.31909 1 6.52459 1 6.52459Z"
          stroke={color || "#000"}
          strokeWidth={2}
        />
        <Path
          d="M19 6.52459L16.7874 1.5H12L12.8046 6.52459C12.8046 6.52459 13.7874 8.31909 16 8.31909C18.2126 8.31909 19 6.52459 19 6.52459Z"
          stroke={color || "#000"}
          strokeWidth={2}
        />
        <Path
          d="M13 7.07926L12.0909 1.5H10H7.90909L7 7.07926C7 7.07926 7.5 8.87375 10 8.87375C12.5 8.87375 13 7.07926 13 7.07926Z"
          stroke={color || "#000"}
          strokeWidth={2}
        />
        <Rect
          x={7.25}
          y={12.5}
          width={5.5}
          height={4.73575}
          fill={color || "#000"}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_3475_2492">
          <Rect width={20} height={20} fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
export default SvgEasMetadataIcon;
