import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../types";
export default function HomeIcon(props: IconProps) {
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
        d="M1.667 6.76v11.573h5.555V12.97c0-.668.428-1.26 1.061-1.472a5.43 5.43 0 013.434 0c.633.211 1.06.804 1.06 1.472v5.363h5.556V6.76L10 1.667 1.667 6.759z"
        stroke={color || "#000"}
        strokeWidth={1.852}
      />
    </Svg>
  );
}
