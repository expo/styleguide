import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
} & SvgProps;
function SvgThemeDarkIcon(props: Props) {
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
        d="M9.15675 0C8.03082 0.19879 6.91983 0.594075 5.87231 1.19886C1.0537 3.98089 -0.597273 10.1424 2.18475 14.961C4.96677 19.7796 11.1283 21.4306 15.9469 18.6486C17.0814 17.9936 18.0403 17.1513 18.8071 16.1833C14.7537 16.8989 10.5066 15.0679 8.32935 11.2968C6.20232 7.61271 6.66663 3.14356 9.15675 0Z"
        fill={color || "#000"}
      />
    </Svg>
  );
}
export default SvgThemeDarkIcon;
