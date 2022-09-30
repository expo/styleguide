import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../types";
export default function ReceiptIcon(props: IconProps) {
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
        d="M2.402 19H2V1h16v18h-.293l-1.363-1.24-.638-.58-.667.546-1.197.977-1.165-.971-.64-.534-.64.534-1.16.966-1.16-.966-.64-.534-.64.534-1.16.966-1.16-.966-.592-.493-.627.445L2.402 19z"
        stroke={color || "#000"}
        strokeWidth={2}
      />
      <Path
        d="M14.172 5.75h.75v-1.5h-.75v1.5zM5 5.75h9.172v-1.5H5v1.5zm9.172 3h.75v-1.5h-.75v1.5zM5 8.75h9.172v-1.5H5v1.5zm5.503 3h.75v-1.5h-.75v1.5zM5 11.75h5.503v-1.5H5v1.5z"
        fill={color || "#000"}
      />
    </Svg>
  );
}