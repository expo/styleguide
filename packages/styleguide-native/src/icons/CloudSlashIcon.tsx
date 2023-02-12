import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
} & SvgProps;
function SvgCloudSlashIcon(props: Props) {
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
        d="M4.45274 6.91291C4.30927 7.20828 4.20113 7.51283 4.13525 7.82082C2.2349 8.31227 0.811951 10.0013 0.811951 12.0383C0.811951 14.4696 2.83748 16.3982 5.28305 16.3982H13.938L12.3332 14.7934H5.28305C3.67696 14.7934 2.41671 13.5372 2.41671 12.0383C2.41671 10.6422 3.50596 9.45749 4.95144 9.29861L5.66615 9.22005V8.50103C5.66615 8.39502 5.67858 8.28196 5.70359 8.16376L4.45274 6.91291ZM7.78098 5.76881L6.60641 4.59424C7.55524 4.00031 8.72016 3.61255 9.99998 3.61255C13.0632 3.61255 15.6261 5.84281 15.9973 8.7657C17.7997 9.10819 19.188 10.6534 19.188 12.5465C19.188 13.8081 18.5717 14.9151 17.6268 15.6146L16.4716 14.4594C17.1441 14.0597 17.5833 13.3437 17.5833 12.5465C17.5833 11.3281 16.5576 10.2995 15.241 10.2995H14.4386V9.49714C14.4386 7.1563 12.4746 5.21731 9.99998 5.21731C9.18546 5.21731 8.42891 5.4289 7.78098 5.76881Z"
        fill={color || "#000"}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.291 17.3055L2.87392 3.88845L3.66452 3.09784L17.0816 16.5149L16.291 17.3055Z"
        fill={color || "#000"}
      />
    </Svg>
  );
}
export default SvgCloudSlashIcon;
