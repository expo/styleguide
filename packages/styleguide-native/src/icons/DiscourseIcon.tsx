import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
} & SvgProps;
function SvgDiscourseIcon(props: Props) {
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
        d="M20 10C20 15.4022 15.7163 19.8039 10.3605 19.9937V20H0V10C0 4.47713 4.47715 0 10 0C15.5228 0 20 4.47713 20 10ZM16.2283 9.84906C16.2283 13.2059 13.5067 15.9272 10.1493 15.9272C9.24328 15.9272 8.38352 15.729 7.61107 15.3736L3.7882 16.1858L4.86945 12.8634C4.361 11.975 4.07039 10.946 4.07039 9.84906C4.07039 6.49222 6.79203 3.77096 10.1493 3.77096C13.5067 3.77096 16.2283 6.49222 16.2283 9.84906Z"
        fill={color || "#000"}
      />
    </Svg>
  );
}
export default SvgDiscourseIcon;
