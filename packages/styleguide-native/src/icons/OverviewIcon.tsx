import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconProps } from "../types";
export default function OverviewIcon(props: SvgProps & IconProps) {
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
        d="M1 .875h6.75c.069 0 .125.056.125.125v6.75a.125.125 0 01-.125.125H1a.125.125 0 01-.125-.125V1C.875.931.931.875 1 .875zm0 11.25h6.75c.069 0 .125.056.125.125V19a.125.125 0 01-.125.125H1A.125.125 0 01.875 19v-6.75c0-.069.056-.125.125-.125zm11.25 0H19c.069 0 .125.056.125.125V19a.125.125 0 01-.125.125h-6.75a.125.125 0 01-.125-.125v-6.75c0-.069.056-.125.125-.125zm0-11.25H19c.069 0 .125.056.125.125v6.75a.125.125 0 01-.125.125h-6.75a.125.125 0 01-.125-.125V1c0-.069.056-.125.125-.125z"
        stroke={color || "#000"}
        strokeWidth={1.75}
      />
    </Svg>
  );
}
