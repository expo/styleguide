import * as React from "react";
import Svg, { SvgProps, Circle, Path } from "react-native-svg";
import { IconProps } from "../../types";
export default function SearchIcon(props: SvgProps & IconProps) {
  const { size, color, width, height } = props;
  return (
    <Svg
      width={size || width || 20}
      height={size || height || 20}
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <Circle
        cx={8.386}
        cy={7.853}
        r={6.806}
        stroke={color || "#000"}
        strokeWidth={2.094}
      />
      <Path
        d="M13.098 13.612l5.235 5.236"
        stroke={color || "#000"}
        strokeWidth={2.094}
        strokeLinecap="round"
      />
    </Svg>
  );
}
