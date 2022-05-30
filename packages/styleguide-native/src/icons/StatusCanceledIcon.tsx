import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconProps } from "../types";
export default function StatusCanceledIcon(props: SvgProps & IconProps) {
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
        d="M0 10C0 4.5 4.5 0 10 0s10 4.5 10 10-4.5 10-10 10S0 15.5 0 10zm6-1a1 1 0 100 2h8a1 1 0 100-2H6z"
        fill={color || "#000"}
      />
    </Svg>
  );
}
