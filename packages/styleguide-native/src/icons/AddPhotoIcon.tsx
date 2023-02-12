import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
} & SvgProps;
function SvgAddPhotoIcon(props: Props) {
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
        d="M17.25 1.75C17.25 1.33579 16.9142 1 16.5 1C16.0858 1 15.75 1.33579 15.75 1.75V3.75H13.75C13.3358 3.75 13 4.08579 13 4.5C13 4.91421 13.3358 5.25 13.75 5.25H15.75V7.25C15.75 7.66421 16.0858 8 16.5 8C16.9142 8 17.25 7.66421 17.25 7.25V5.25H19.25C19.6642 5.25 20 4.91421 20 4.5C20 4.08579 19.6642 3.75 19.25 3.75H17.25V1.75Z"
        fill={color || "#000"}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.15169 5.67289L3.69231 7H2C0.895431 7 0 7.89543 0 9V17C0 18.1046 0.89543 19 2 19H13C14.1046 19 15 18.1046 15 17V9C15 7.89543 14.1046 7 13 7H11.3077L10.8483 5.67289C10.7089 5.27013 10.3295 5 9.90332 5H5.09668C4.67047 5 4.29111 5.27013 4.15169 5.67289ZM7.5 15.5C9.15685 15.5 10.5 14.1569 10.5 12.5C10.5 10.8431 9.15685 9.5 7.5 9.5C5.84315 9.5 4.5 10.8431 4.5 12.5C4.5 14.1569 5.84315 15.5 7.5 15.5Z"
        fill={color || "#000"}
      />
    </Svg>
  );
}
export default SvgAddPhotoIcon;
