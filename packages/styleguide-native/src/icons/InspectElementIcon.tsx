import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
} & SvgProps;
function SvgInspectElementIcon(props: Props) {
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
        d="M2.33124 2.35229L19.9999 2.35228V0L6.8363e-05 8.06189e-06L0 20L2.33118 20L2.33124 2.35229Z"
        fill={color || "#000"}
      />
      <Path
        d="M4.65332 17.6477H6.9845V20H4.65332V17.6477Z"
        fill={color || "#000"}
      />
      <Path
        d="M9.03809 17.6477H11.3693V20H9.03809V17.6477Z"
        fill={color || "#000"}
      />
      <Path
        d="M13.423 17.6477H15.7542V20H13.423V17.6477Z"
        fill={color || "#000"}
      />
      <Path
        d="M20 4.53525V6.88753L17.6688 6.88753V4.53525H20Z"
        fill={color || "#000"}
      />
      <Path d="M20 8.9597V11.312H17.6688V8.9597H20Z" fill={color || "#000"} />
      <Path
        d="M19.9999 13.3843V15.7365H17.6687V13.3843H19.9999Z"
        fill={color || "#000"}
      />
      <Path
        d="M17.6687 17.6477H19.9999V20H17.6687V17.6477Z"
        fill={color || "#000"}
      />
    </Svg>
  );
}
export default SvgInspectElementIcon;
