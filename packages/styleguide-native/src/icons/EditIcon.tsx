import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath, Rect } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
} & SvgProps;
function SvgEditIcon(props: Props) {
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
      <G clipPath="url(#clip0_3427_2475)">
        <Path
          d="M9.16669 3.33337H3.33335C2.89133 3.33337 2.4674 3.50897 2.15484 3.82153C1.84228 4.13409 1.66669 4.55801 1.66669 5.00004V16.6667C1.66669 17.1087 1.84228 17.5327 2.15484 17.8452C2.4674 18.1578 2.89133 18.3334 3.33335 18.3334H15C15.442 18.3334 15.866 18.1578 16.1785 17.8452C16.4911 17.5327 16.6667 17.1087 16.6667 16.6667V10.8334"
          stroke={color || "#000"}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M15.4167 2.08332C15.7482 1.7518 16.1978 1.56555 16.6667 1.56555C17.1355 1.56555 17.5852 1.7518 17.9167 2.08332C18.2482 2.41484 18.4345 2.86448 18.4345 3.33332C18.4345 3.80216 18.2482 4.2518 17.9167 4.58332L10 12.5L6.66669 13.3333L7.50002 9.99999L15.4167 2.08332Z"
          stroke={color || "#000"}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_3427_2475">
          <Rect width={20} height={20} fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
export default SvgEditIcon;
