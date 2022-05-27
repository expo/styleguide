import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconProps } from "../types";
export default function ThemeIcon(props: SvgProps & IconProps) {
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
        d="M20 16a4 4 0 01-4 4H4a4 4 0 01-4-4V4a4 4 0 014-4h12a4 4 0 014 4v12zM2.603 17.43L17.415 2.587A1.994 1.994 0 0016 2H4a2 2 0 00-2 2v12c0 .56.23 1.068.603 1.43z"
        fill={color || "#000"}
      />
    </Svg>
  );
}
