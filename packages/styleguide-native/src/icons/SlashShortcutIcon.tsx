import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../types";
export default function SlashShortcutIcon(props: IconProps) {
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
        d="M16 .5H4A3.5 3.5 0 00.5 4v12A3.5 3.5 0 004 19.5h12a3.5 3.5 0 003.5-3.5V4A3.5 3.5 0 0016 .5zM6.5 16l7-12"
        stroke={color || "#000"}
      />
    </Svg>
  );
}
