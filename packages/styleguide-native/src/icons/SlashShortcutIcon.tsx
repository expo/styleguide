import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
} & SvgProps;
function SvgSlashShortcutIcon(props: Props) {
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
        d="M16 0.5H4C2.067 0.5 0.5 2.067 0.5 4V16C0.5 17.933 2.067 19.5 4 19.5H16C17.933 19.5 19.5 17.933 19.5 16V4C19.5 2.067 17.933 0.5 16 0.5Z"
        stroke={color || "#000"}
      />
      <Path d="M6.5 16L13.5 4" stroke={color || "#000"} />
    </Svg>
  );
}
export default SvgSlashShortcutIcon;
