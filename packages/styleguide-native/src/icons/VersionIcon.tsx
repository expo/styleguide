import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { IconProps } from "../types";
export default function VersionIcon(props: SvgProps & IconProps) {
  const { size, color, width, height } = props;
  return (
    <Svg
      viewBox="0 0 21 20"
      fill="none"
      width={size || width || 20}
      height={size || height || 20}
      {...props}
    >
      <G
        clipPath="url(#version-icon_svg__version-icon_svg__clip0)"
        fill={color || "#000"}
      >
        <Path d="M11.893 8.959l-.232 2.083H9.588l.232-2.083h2.073z" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.074 0A3.333 3.333 0 00.74 3.333v13.334A3.333 3.333 0 004.074 20h13.333a3.333 3.333 0 003.334-3.333V3.333A3.333 3.333 0 0017.407 0H4.074zm6.245 4.467a.833.833 0 00-1.657-.184l-.334 3.009H5.741a.833.833 0 000 1.667h2.402l-.232 2.083h-2.17a.833.833 0 000 1.667h1.985l-.314 2.824a.833.833 0 001.657.184l.334-3.008h2.073l-.314 2.824a.833.833 0 001.657.184l.334-3.008h2.588a.833.833 0 000-1.667h-2.403l.232-2.083h2.17a.833.833 0 000-1.667h-1.985l.314-2.825a.833.833 0 00-1.657-.184l-.334 3.009h-2.073l.314-2.825z"
        />
      </G>
      <Defs>
        <ClipPath id="version-icon_svg__version-icon_svg__clip0">
          <Path fill="#fff" transform="translate(.74)" d="M0 0h20v20H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
