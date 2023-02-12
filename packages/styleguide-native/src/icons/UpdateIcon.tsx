import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
} & SvgProps;
function SvgUpdateIcon(props: Props) {
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
        d="M3.41455 9.99999L9.99997 13.2927L16.5854 9.99998L19.9828 11.6987L9.99997 16.6901L0.0170898 11.6987L3.41455 9.99999Z"
        fill={color || "#000"}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.99997 4.65142L2.70038 8.30122L9.99998 11.951L17.2996 8.30122L9.99997 4.65142ZM9.99997 3.30978L19.9828 8.30122L9.99997 13.2927L0.0170975 8.30122L9.99997 3.30978Z"
        fill={color || "#000"}
      />
    </Svg>
  );
}
export default SvgUpdateIcon;
