import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
} & SvgProps;
function SvgDeploymentIcon(props: Props) {
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
        d="M2 2C0.895431 2 0 2.89543 0 4V16C0 17.1046 0.895431 18 2 18H9V9.74742L6.04028 12.7071C5.64975 13.0977 5.01659 13.0977 4.62606 12.7071C4.23554 12.3166 4.23554 11.6835 4.62606 11.2929L9.29273 6.62627C9.40623 6.51277 9.54022 6.43226 9.68279 6.38473C9.77476 6.35399 9.87268 6.33625 9.97437 6.3337C9.98388 6.33346 9.9934 6.33335 10.0029 6.33338C10.2834 6.33418 10.5367 6.45043 10.7178 6.6371L15.3736 11.2929C15.7641 11.6835 15.7641 12.3166 15.3736 12.7071C14.9831 13.0977 14.3499 13.0977 13.9594 12.7071L11 9.74775V18H18C19.1046 18 20 17.1046 20 16V4C20 2.89543 19.1046 2 18 2H2Z"
        fill={color || "#000"}
      />
    </Svg>
  );
}
export default SvgDeploymentIcon;
