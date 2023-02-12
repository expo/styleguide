import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
} & SvgProps;
function SvgFacebookIcon(props: Props) {
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
        d="M20.0002 10.0609C20.0002 4.50408 15.5228 -0.000610352 9.99961 -0.000610352C4.47643 -0.000610352 -0.000976562 4.50408 -0.000976562 10.0609C-0.000976562 15.0829 3.65609 19.2454 8.43702 20.0002V12.9693H5.89781V10.0609H8.43702V7.84422C8.43702 5.32256 9.93004 3.92967 12.2144 3.92967C13.3085 3.92967 14.453 4.12618 14.453 4.12618V6.60225H13.1919C11.9496 6.60225 11.5622 7.37784 11.5622 8.17352V10.0609H14.3358L13.8924 12.9693H11.5622V20.0002C16.3431 19.2454 20.0002 15.0829 20.0002 10.0609Z"
        fill={color || "#000"}
      />
    </Svg>
  );
}
export default SvgFacebookIcon;
