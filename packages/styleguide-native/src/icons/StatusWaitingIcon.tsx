import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../types";
export default function StatusWaitingIcon(props: IconProps) {
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
        d="M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0zm0 11a1 1 0 01-1-1V5a1 1 0 012 0v4h3a1 1 0 110 2h-4z"
        fill={color || "#000"}
      />
    </Svg>
  );
}
