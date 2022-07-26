import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../types";
export default function OpenInternalIcon(props: IconProps) {
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
        d="M6.28 4.524l8.78 8.78L17.692 1.89 6.28 4.524z"
        fill={color || "#000"}
      />
      <Path
        d="M10.67 8.913l-8.78 8.78"
        stroke={color || "#000"}
        strokeWidth={2.057}
        strokeLinecap="round"
      />
    </Svg>
  );
}
