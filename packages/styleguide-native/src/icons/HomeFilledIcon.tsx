import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconProps } from "../types";
export default function HomeFilledIcon(props: SvgProps & IconProps) {
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
        d="M1 6.5V19h6.632v-6.204a1.2 1.2 0 01.733-1.106 4.202 4.202 0 013.27 0 1.2 1.2 0 01.733 1.106V19H19V6.5L10 1 1 6.5z"
        fill={color || "#000"}
      />
    </Svg>
  );
}
