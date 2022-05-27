import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconProps } from "../types";
export default function PlanProductionIcon(props: SvgProps & IconProps) {
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
        d="M16.564 16.274L10 5.05 3.436 16.274h13.128zM10.932 1.83a1.08 1.08 0 00-1.864 0L.149 17.078a1.08 1.08 0 00.933 1.626h17.836a1.08 1.08 0 00.933-1.626L10.932 1.831z"
        fill={color || "#000"}
      />
      <Path d="M10 8.633l3.445 5.889h-6.89L10 8.632z" fill={color || "#000"} />
    </Svg>
  );
}
