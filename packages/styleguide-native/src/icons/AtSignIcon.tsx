import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
} & SvgProps;
function SvgAtSignIcon(props: Props) {
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
        d="M13.3333 6.66666V10.8333C13.3333 11.4964 13.5967 12.1323 14.0656 12.6011C14.5344 13.0699 15.1703 13.3333 15.8333 13.3333C16.4964 13.3333 17.1323 13.0699 17.6011 12.6011C18.0699 12.1323 18.3333 11.4964 18.3333 10.8333V9.99999C18.3332 8.11918 17.6969 6.29372 16.5277 4.82043C15.3586 3.34715 13.7255 2.31268 11.8939 1.88524C10.0623 1.4578 8.13995 1.66253 6.43946 2.46613C4.73897 3.26974 3.36034 4.62495 2.52772 6.31143C1.6951 7.9979 1.45748 9.91644 1.85348 11.7551C2.24948 13.5937 3.25582 15.2444 4.70886 16.4385C6.16191 17.6327 7.9762 18.3003 9.85673 18.3326C11.7373 18.365 13.5734 17.7602 15.0667 16.6167M13.3333 9.99999C13.3333 11.8409 11.8409 13.3333 10 13.3333C8.15905 13.3333 6.66666 11.8409 6.66666 9.99999C6.66666 8.15904 8.15905 6.66666 10 6.66666C11.8409 6.66666 13.3333 8.15904 13.3333 9.99999Z"
        stroke={color || "#000"}
        strokeWidth={1.85}
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
export default SvgAtSignIcon;
