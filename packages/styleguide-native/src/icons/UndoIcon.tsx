import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
} & SvgProps;
function SvgUndoIcon(props: Props) {
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
        d="M7.98246 7.66444V11.6447L0 6.65566L7.98245 1.66663V5.64689C7.98245 5.64689 7.98246 5.64689 7.98245 5.64689H14.9233C17.7089 5.64689 19.9671 7.9051 19.9671 10.6907V18.6293C19.9671 19.1865 19.5155 19.6381 18.9583 19.6381C18.4012 19.6381 17.9496 19.1865 17.9496 18.6293V10.6907C17.9496 9.01936 16.5946 7.66444 14.9233 7.66444H7.98246C7.98246 7.66444 7.98245 7.66444 7.98246 7.66444Z"
        fill={color || "#000"}
      />
    </Svg>
  );
}
export default SvgUndoIcon;
