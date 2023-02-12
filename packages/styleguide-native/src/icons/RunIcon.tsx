import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
} & SvgProps;
function SvgRunIcon(props: Props) {
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
        d="M15.7508 2.95888C15.7508 4.08676 14.8216 5.00108 13.6753 5.00108C12.5291 5.00108 11.5998 4.08676 11.5998 2.95888C11.5998 1.83101 12.5291 0.916687 13.6753 0.916687C14.8216 0.916687 15.7508 1.83101 15.7508 2.95888Z"
        fill={color || "#000"}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.4442 5.83169H13.9164L17.9809 9.74591H19.1667V11.7436H17.1527L14.3676 9.06142L14.1164 12.7443L15.9012 14.5005V21.0834H13.871V15.328L11.9002 13.3888L11.0757 17.7625L4.90388 16.7504L5.23765 14.7799L9.44312 15.4696L10.2467 11.2067L10.4914 8.37077L9.15582 8.90617V11.4255H7.12557V7.56293L11.4442 5.83169Z"
        fill={color || "#000"}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.90891 2.42803H8.40016V4.42572H2.90891V2.42803ZM1.52523 6.25716H5.20056V8.25485H1.52523V6.25716ZM0.833344 10.0437H5.15729V12.0414H0.833344V10.0437Z"
        fill={color || "#000"}
      />
    </Svg>
  );
}
export default SvgRunIcon;
