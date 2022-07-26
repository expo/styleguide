import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../types";
export default function ClipboardIcon(props: IconProps) {
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
        d="M13.333 3.333H15A1.667 1.667 0 0116.667 5v11.667A1.666 1.666 0 0115 18.333H5a1.667 1.667 0 01-1.667-1.666V5A1.667 1.667 0 015 3.333h1.667"
        stroke={color || "#000"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.5 1.667h-5a.833.833 0 00-.833.833v1.667c0 .46.373.833.833.833h5c.46 0 .833-.373.833-.833V2.5a.833.833 0 00-.833-.833z"
        stroke={color || "#000"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
