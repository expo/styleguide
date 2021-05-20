import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconProps } from "../../types";
export default function RefreshIcon(props: SvgProps & IconProps) {
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
        d="M17.143 9.524v-.762a4 4 0 00-4-4H6.667"
        stroke={color || "#000"}
        strokeWidth={2}
        strokeLinecap="round"
      />
      <Path d="M7.619 9.524V0L0 4.535l7.619 4.989z" fill={color || "#000"} />
      <Path
        d="M2.857 10.476v.762a4 4 0 004 4h6.476"
        stroke={color || "#000"}
        strokeWidth={2}
        strokeLinecap="round"
      />
      <Path
        d="M12.381 10.476V20L20 15.465l-7.619-4.989z"
        fill={color || "#000"}
      />
    </Svg>
  );
}
