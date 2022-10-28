import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../types";
export default function WrapLinesIcon(props: IconProps) {
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
        d="M1.5 4.619a1 1 0 011-1h15a1 1 0 110 2h-15a1 1 0 01-1-1zm0 10a1 1 0 011-1h4a1 1 0 110 2h-4a1 1 0 01-1-1zm0-5a1 1 0 011-1H16a2.5 2.5 0 012.5 2.5v2a2.5 2.5 0 01-2.5 2.5h-2.5v-2H16a.5.5 0 00.5-.5v-2a.5.5 0 00-.5-.5H2.5a1 1 0 01-1-1z"
        fill={color || "#000"}
      />
      <Path
        d="M13.6 11.857v5.524L8.947 14.62l4.653-2.762z"
        fill={color || "#000"}
      />
    </Svg>
  );
}
