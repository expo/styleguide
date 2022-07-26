import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../types";
export default function UndoIcon(props: IconProps) {
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
        d="M7.982 7.664v3.98L0 6.657l7.982-4.99v3.98h6.941a5.044 5.044 0 015.044 5.045v7.938a1.009 1.009 0 11-2.017 0v-7.938a3.026 3.026 0 00-3.027-3.027h-6.94z"
        fill={color || "#000"}
      />
    </Svg>
  );
}
