import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconProps } from "../types";
export default function StatusSuccessIcon(props: SvgProps & IconProps) {
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
        d="M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0zM8.66 11.414L6.569 9.321a1 1 0 00-1.415 1.414l2.8 2.8a1 1 0 001.415 0l5.656-5.656a1 1 0 00-1.414-1.415l-4.95 4.95z"
        fill={color || "#000"}
      />
    </Svg>
  );
}
