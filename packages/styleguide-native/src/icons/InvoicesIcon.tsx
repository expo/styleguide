import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconProps } from "../types";
export default function InvoicesIcon(props: SvgProps & IconProps) {
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
        d="M.875 18.673V3C.875 1.826 1.826.875 3 .875h14c1.174 0 2.125.951 2.125 2.125v15.673l-2.28-.977-.373-.16-.363.181-2.637 1.319-3.127-1.34-.345-.148-.345.148-3.127 1.34-2.637-1.319-.363-.181-.373.16-2.28.977z"
        stroke={color || "#000"}
        strokeWidth={1.75}
      />
      <Path
        d="M5.265 5.732h9.47M5.265 8.43h9.47m-9.47 2.933h6.123"
        stroke={color || "#000"}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </Svg>
  );
}
