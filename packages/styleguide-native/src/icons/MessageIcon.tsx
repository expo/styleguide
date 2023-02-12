import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
} & SvgProps;
function SvgMessageIcon(props: Props) {
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
        d="M0 1.66667C0 0.746193 0.746192 0 1.66667 0H18.3333C19.2538 0 20 0.746192 20 1.66667V15C20 15.9205 19.2538 16.6667 18.3333 16.6667H9.4982C9.20311 16.6667 8.91331 16.745 8.65841 16.8937L3.33333 20V17.5C3.33333 17.0398 2.96024 16.6667 2.5 16.6667H1.66667C0.746192 16.6667 0 15.9205 0 15V1.66667ZM5 10C5.92047 10 6.66667 9.25381 6.66667 8.33333C6.66667 7.41286 5.92047 6.66667 5 6.66667C4.07953 6.66667 3.33333 7.41286 3.33333 8.33333C3.33333 9.25381 4.07953 10 5 10ZM11.6667 8.33333C11.6667 9.25381 10.9205 10 10 10C9.07952 10 8.33333 9.25381 8.33333 8.33333C8.33333 7.41286 9.07952 6.66667 10 6.66667C10.9205 6.66667 11.6667 7.41286 11.6667 8.33333ZM15 10C15.9205 10 16.6667 9.25381 16.6667 8.33333C16.6667 7.41286 15.9205 6.66667 15 6.66667C14.0795 6.66667 13.3333 7.41286 13.3333 8.33333C13.3333 9.25381 14.0795 10 15 10Z"
        fill={color || "#000"}
      />
    </Svg>
  );
}
export default SvgMessageIcon;
