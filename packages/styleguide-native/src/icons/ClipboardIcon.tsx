import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
} & SvgProps;
function SvgClipboardIcon(props: Props) {
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
        d="M13.3333 3.33337H15C15.442 3.33337 15.8659 3.50897 16.1785 3.82153C16.4911 4.13409 16.6666 4.55801 16.6666 5.00004V16.6667C16.6666 17.1087 16.4911 17.5327 16.1785 17.8452C15.8659 18.1578 15.442 18.3334 15 18.3334H4.99998C4.55795 18.3334 4.13403 18.1578 3.82147 17.8452C3.50891 17.5327 3.33331 17.1087 3.33331 16.6667V5.00004C3.33331 4.55801 3.50891 4.13409 3.82147 3.82153C4.13403 3.50897 4.55795 3.33337 4.99998 3.33337H6.66665"
        stroke={color || "#000"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.7856 10.8413H13.4106V9.59131H12.7856V10.8413ZM6.38666 10.8413H12.7856V9.59131H6.38666V10.8413Z"
        fill={color || "#000"}
      />
      <Path
        d="M12.7856 13.8413H13.4106V12.5913H12.7856V13.8413ZM6.38666 13.8413H12.7856V12.5913H6.38666V13.8413Z"
        fill={color || "#000"}
      />
      <Path
        d="M12.5 1.66663H7.50002C7.03978 1.66663 6.66669 2.1172 6.66669 2.673V4.68576C6.66669 5.24157 7.03978 5.69214 7.50002 5.69214H12.5C12.9603 5.69214 13.3334 5.24157 13.3334 4.68576V2.673C13.3334 2.1172 12.9603 1.66663 12.5 1.66663Z"
        stroke={color || "#000"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
export default SvgClipboardIcon;
