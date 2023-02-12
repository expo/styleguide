import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
} & SvgProps;
function SvgProjectTransferIcon(props: Props) {
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
        d="M11.0887 4H3.24874C2.67436 4 2.20874 4.46562 2.20874 5.04V14.96C2.20874 15.5344 2.67436 16 3.24874 16H13.1687C13.7431 16 14.2087 15.5344 14.2087 14.96V13.1769L16.2087 11.5131V14.96C16.2087 16.6389 14.8477 18 13.1687 18H3.24874C1.56979 18 0.20874 16.6389 0.20874 14.96V5.04C0.20874 3.36105 1.56979 2 3.24874 2H11.0887V4ZM16.2087 9.82207L14.2087 11.4859V5.04C14.2087 4.46562 13.7431 4 13.1687 4H12.3887V2H12.3887L16.2087 5.17789V9.82207Z"
        fill={color || "#000"}
      />
      <Path
        d="M12.3886 13V9.66517C9.49452 9.66517 7.45943 10.8529 6.45941 11.7503C6.28478 11.907 5.98374 11.7781 6.00069 11.5394C6.35173 6.59246 10.3461 5.26701 12.3886 5.2353V2L19 7.5L12.3886 13Z"
        fill={color || "#000"}
      />
    </Svg>
  );
}
export default SvgProjectTransferIcon;
