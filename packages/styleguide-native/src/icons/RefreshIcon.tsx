import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
} & SvgProps;
function SvgRefreshIcon(props: Props) {
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
        d="M17.1429 9.52387V8.76196C17.1429 6.55283 15.352 4.76196 13.1429 4.76196H6.66666"
        stroke={color || "#000"}
        strokeWidth={2}
        strokeLinecap="round"
      />
      <Path
        d="M7.61905 9.5238L7.61905 -5.63119e-06L5.94892e-08 4.53514L7.61905 9.5238Z"
        fill={color || "#000"}
      />
      <Path
        d="M2.85714 10.4761L2.85714 11.238C2.85715 13.4472 4.64801 15.238 6.85715 15.238L13.3333 15.238"
        stroke={color || "#000"}
        strokeWidth={2}
        strokeLinecap="round"
      />
      <Path
        d="M12.381 10.4762L12.381 20L20 15.4649L12.381 10.4762Z"
        fill={color || "#000"}
      />
    </Svg>
  );
}
export default SvgRefreshIcon;
