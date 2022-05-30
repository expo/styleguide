import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconProps } from "../types";
export default function MailIcon(props: SvgProps & IconProps) {
  const { size, color, width, height } = props;
  return (
    <Svg
      viewBox="0 0 20 20"
      fill="none"
      width={size || width || 20}
      height={size || height || 20}
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.667 3.333H3.333a1.67 1.67 0 00-1.457.86.831.831 0 01.269.124L10 9.817l7.855-5.5a.832.832 0 01.269-.124 1.67 1.67 0 00-1.457-.86zm1.666 2.684l-7.855 5.499c-.287.2-.669.2-.956 0L1.667 6.017V15c0 .917.75 1.667 1.666 1.667h13.334c.916 0 1.666-.75 1.666-1.667V6.017z"
        fill={color || "#000"}
      />
    </Svg>
  );
}
