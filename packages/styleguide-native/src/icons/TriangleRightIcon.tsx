import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconProps } from "../types";
export default function TriangleRightIcon(props: SvgProps & IconProps) {
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
        d="M6.667 3.227v13.766l6.883-6.883-6.883-6.883z"
        fill={color || "#000"}
      />
    </Svg>
  );
}
