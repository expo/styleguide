import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconProps } from "../types";
export default function AtSignIcon(props: SvgProps & IconProps) {
  const { size, color, width, height } = props;
  return (
    <Svg
      width={size || width || 20}
      height={size || height || 20}
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <Path
        d="M13.333 6.667v4.166a2.5 2.5 0 105 0V10a8.333 8.333 0 10-3.266 6.617M13.333 10a3.333 3.333 0 11-6.666 0 3.333 3.333 0 016.666 0z"
        stroke={color || "#000"}
        strokeWidth={1.85}
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
