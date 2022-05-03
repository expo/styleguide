import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconProps } from "../types";
export default function DeploymentIcon(props: SvgProps & IconProps) {
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
        d="M2 2a2 2 0 00-2 2v12a2 2 0 002 2h7V9.747l-2.96 2.96a1 1 0 11-1.414-1.414l4.667-4.667a.996.996 0 01.71-.293c.28.001.534.117.715.304l4.656 4.656a1 1 0 01-1.415 1.414L11 9.747V18h7a2 2 0 002-2V4a2 2 0 00-2-2H2z"
        fill={color || "#000"}
      />
    </Svg>
  );
}
