import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconProps } from "../types";
export default function InspectElementIcon(props: SvgProps & IconProps) {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.331 2.352H20V0H0v20h2.331V2.352z"
        fill={color || "#000"}
      />
      <Path
        d="M4.653 17.648h2.332V20H4.652v-2.352zm4.385 0h2.331V20H9.04v-2.352zm4.385 0h2.331V20h-2.331v-2.352zM20 4.535v2.353h-2.331V4.535H20zm0 4.425v2.352h-2.331V8.96H20zm0 4.424v2.352h-2.331v-2.352h2.33zm-2.331 4.264h2.33V20h-2.33v-2.352z"
        fill={color || "#000"}
      />
    </Svg>
  );
}
