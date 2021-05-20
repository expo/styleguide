import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconProps } from "../../types";
export default function DownloadIcon(props: SvgProps & IconProps) {
  const { size, color, width, height } = props;
  return (
    <Svg
      width={size || width || 20}
      height={size || height || 20}
      viewBox="0 0 20 22"
      fill="none"
      {...props}
    >
      <Path d="M14.583 11H5.417L10 18.333 14.583 11z" fill={color || "#000"} />
      <Path
        d="M1.75 20.167h16.5M10 11V1.833"
        stroke={color || "#000"}
        strokeWidth={1.833}
        strokeLinecap="round"
      />
    </Svg>
  );
}
