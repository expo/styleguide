import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
} & SvgProps;
function SvgUsersFilledIcon(props: Props) {
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
        d="M10.4868 13.9138C12.9068 10.4752 13.3143 3.56611 7.86715 3.56611C2.42003 3.56611 2.82337 10.4752 5.2434 13.9138C2.82337 13.9138 0 16.1744 0 18.4668H15.7302C15.7343 16.1744 12.9068 13.9138 10.4868 13.9138Z"
        fill={color || "#000"}
      />
      <Path
        d="M14.7104 11.8471C17.1305 8.4085 17.5379 1.49942 12.0908 1.49942C10.7097 1.49942 9.70464 1.9436 9.01326 2.66276C10.0754 2.85162 10.9525 3.31106 11.628 3.9978C12.5146 4.89907 12.9625 6.09833 13.1195 7.32327C13.3637 9.22814 12.9325 11.3902 12.0821 13.1562C13.0275 13.4377 13.9253 13.9435 14.6629 14.5662C15.2605 15.0706 15.8024 15.6954 16.1814 16.4001H19.9538C19.9579 14.1077 17.1305 11.8471 14.7104 11.8471Z"
        fill={color || "#000"}
      />
    </Svg>
  );
}
export default SvgUsersFilledIcon;
