import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconProps } from "../types";
export default function UpdateIcon(props: SvgProps & IconProps) {
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
        d="M3.415 10L10 13.293 16.585 10l3.398 1.699L10 16.69.017 11.7 3.415 10z"
        fill={color || "#000"}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 4.651l-7.3 3.65 7.3 3.65 7.3-3.65-7.3-3.65zm0-1.341l9.983 4.99L10 13.293.017 8.3 10 3.31z"
        fill={color || "#000"}
      />
    </Svg>
  );
}
