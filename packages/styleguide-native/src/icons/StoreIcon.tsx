import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../types";
export default function StoreIcon(props: IconProps) {
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
        d="M2.973 9.89v8.43h14.056V9.89"
        stroke={color || "#000"}
        strokeWidth={1.667}
      />
      <Path
        d="M.979 9.037L3.234 1.82h4.88l-.82 7.217s-.902 1.353-3.158 1.353C1.881 10.39.98 9.037.98 9.037zm18.044 0l-2.256-7.218h-4.88l.82 7.218s.902 1.353 3.158 1.353c2.255 0 3.158-1.353 3.158-1.353z"
        stroke={color || "#000"}
        strokeWidth={1.64}
      />
      <Path
        d="M12.707 9.037l-.82-7.218H8.114l-.82 7.218S7.745 10.39 10 10.39c2.256 0 2.707-1.353 2.707-1.353z"
        stroke={color || "#000"}
        strokeWidth={1.64}
      />
      <Path fill={color || "#000"} d="M7.251 13.584h5.5v4.736h-5.5z" />
    </Svg>
  );
}
