import * as React from "react";
import Svg, { SvgProps, Path, Rect } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
} & SvgProps;
function SvgOneTimePasswordIcon(props: Props) {
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
        d="M14.2866 15.3415V17.8881C14.2866 19.1465 13.2665 20.1667 12.0081 20.1667H4.03313C2.77472 20.1667 1.75458 19.1465 1.75458 17.8881V4.21682C1.75458 2.95841 2.77472 1.93826 4.03313 1.93826H12.0081C13.2665 1.93826 14.2866 2.95841 14.2866 4.21682V6.76343"
        stroke={color || "#000"}
        strokeWidth={2.01049}
      />
      <Rect
        width={6.03146}
        height={3.01573}
        rx={1.00524}
        transform="matrix(-1 0 0 1 10.8017 1)"
        fill={color || "#000"}
      />
      <Path
        d="M6.58822 13.1294H7.74206L7.62668 11.8602L8.67956 12.5958L9.25649 11.5861L8.10264 11.0525L9.25649 10.5188L8.67956 9.50921L7.62668 10.2448L7.74206 8.97556H6.58822L6.7036 10.2448L5.65072 9.50921L5.07379 10.5188L6.22764 11.0525L5.07379 11.5861L5.65072 12.5958L6.7036 11.8602L6.58822 13.1294Z"
        fill={color || "#000"}
      />
      <Path
        d="M11.8553 13.1294H13.0092L12.8938 11.8602L13.9467 12.5958L14.5236 11.5861L13.3698 11.0525L14.5236 10.5188L13.9467 9.50921L12.8938 10.2448L13.0092 8.97556H11.8553L11.9707 10.2448L10.9178 9.50921L10.3409 10.5188L11.4947 11.0525L10.3409 11.5861L10.9178 12.5958L11.9707 11.8602L11.8553 13.1294Z"
        fill={color || "#000"}
      />
      <Path
        d="M17.2438 13.1294H18.3977L18.2823 11.8602L19.3352 12.5958L19.9121 11.5861L18.7583 11.0525L19.9121 10.5188L19.3352 9.50921L18.2823 10.2448L18.3977 8.97556H17.2438L17.3592 10.2448L16.3063 9.50921L15.7294 10.5188L16.8833 11.0525L15.7294 11.5861L16.3063 12.5958L17.3592 11.8602L17.2438 13.1294Z"
        fill={color || "#000"}
      />
    </Svg>
  );
}
export default SvgOneTimePasswordIcon;
