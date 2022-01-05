import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconProps } from "../../types";
export default function BuildIcon(props: SvgProps & IconProps) {
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
        d="M10 18.943V9.098m0 9.845L1.964 14.92V5.08M10 18.943l8.037-4.022V5.08M10 9.098L1.964 5.08M10 9.098l8.037-4.018m-16.073 0L10 1.057l8.037 4.023"
        stroke={color || "#000"}
        strokeWidth={1.85}
      />
    </Svg>
  );
}
