import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
} & SvgProps;
function SvgMegaphoneIcon(props: Props) {
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
        d="M15.9091 1.66663C13.9044 1.66663 6.90906 6.75751 6.90906 6.75751V12.9391C6.90906 12.9391 13.9044 18.0297 15.9091 18.0297C18.2413 18.0297 19.9999 14.5124 19.9999 9.84818C19.9999 5.18396 18.2413 1.66663 15.9091 1.66663ZM15.9091 16.212C14.9824 16.212 13.6362 13.7331 13.6362 9.84818C13.6362 5.96373 14.9824 3.48463 15.9091 3.48463C16.8359 3.48463 18.1819 5.96351 18.1819 9.84818C18.1817 13.7331 16.8359 16.212 15.9091 16.212Z"
        fill={color || "#000"}
      />
      <Path
        d="M15.9091 12.3425C16.5116 12.3425 17 11.2259 17 9.84849C17 8.47109 16.5116 7.35449 15.9091 7.35449C15.3066 7.35449 14.8182 8.47109 14.8182 9.84849C14.8182 11.2259 15.3066 12.3425 15.9091 12.3425Z"
        fill={color || "#000"}
      />
      <Path
        d="M3.33331 17.6667C3.33331 18.3665 3.9062 18.9396 4.60598 18.9396H5.87887C6.57864 18.9396 7.15153 18.3669 7.15153 17.6667V15.7575V14.3747L6.90906 14.1667L6.49239 13.8483H5.24242H3.33331V17.6667Z"
        fill={color || "#000"}
      />
      <Path
        d="M5.81822 12.9391V6.75757H3.09089C1.384 6.75757 0 8.14112 0 9.84823C0 11.5553 1.384 12.9391 3.09089 12.9391H5.81822Z"
        fill={color || "#000"}
      />
    </Svg>
  );
}
export default SvgMegaphoneIcon;
