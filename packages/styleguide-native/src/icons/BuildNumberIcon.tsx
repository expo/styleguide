import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconProps } from "../types";
export default function BuildNumberIcon(props: SvgProps & IconProps) {
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
        d="M4 0a4 4 0 00-4 4v12c0 .45.074.882.21 1.285l5.225-5.224a5.002 5.002 0 016.62-6.62L8.92 8.576l-.009.008a.834.834 0 000 1.167l1.334 1.334a.834.834 0 001.167 0l3.143-3.143a5.002 5.002 0 01-6.62 6.62L2.71 19.788A4.02 4.02 0 004 20h12a4 4 0 004-4V4a4 4 0 00-4-4H4z"
        fill={color || "#000"}
      />
    </Svg>
  );
}
