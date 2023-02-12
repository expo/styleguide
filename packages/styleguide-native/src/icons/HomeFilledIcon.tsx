import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
} & SvgProps;
function SvgHomeFilledIcon(props: Props) {
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
        d="M1 6.5V19H7.63158V12.7964C7.63158 12.3137 7.92061 11.878 8.36528 11.6902C9.41043 11.2489 10.5896 11.2489 11.6347 11.6902C12.0794 11.878 12.3684 12.3137 12.3684 12.7964V19H19V6.5L10 1L1 6.5Z"
        fill={color || "#000"}
      />
    </Svg>
  );
}
export default SvgHomeFilledIcon;
