import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
} & SvgProps;
function SvgBuildIcon(props: Props) {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.0001 0.0230713L18.9615 4.50809V15.4923L10.0001 19.9769L1.03861 15.4923V4.50809L10.0001 0.0230713ZM2.88861 6.57621V14.3494L9.07507 17.4453V9.66943L2.88861 6.57621ZM10.9251 9.66943V17.4453L17.1115 14.3494V6.57621L10.9251 9.66943ZM15.969 5.07913L10.0001 8.06357L4.03118 5.07913L10.0001 2.09183L15.969 5.07913Z"
        fill={color || "#000"}
      />
    </Svg>
  );
}
export default SvgBuildIcon;
