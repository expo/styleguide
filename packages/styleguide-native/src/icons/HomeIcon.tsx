import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
} & SvgProps;
function SvgHomeIcon(props: Props) {
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
        d="M1.66667 6.75926V18.3333H7.22223V12.97C7.22223 12.3022 7.64951 11.7094 8.28299 11.4983C9.39752 11.1268 10.6025 11.1268 11.717 11.4983C12.3505 11.7094 12.7778 12.3022 12.7778 12.97V18.3333H18.3333V6.75926L10 1.66666L1.66667 6.75926Z"
        stroke={color || "#000"}
        strokeWidth={1.85185}
      />
    </Svg>
  );
}
export default SvgHomeIcon;
