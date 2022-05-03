import * as React from "react";
import Svg, { SvgProps, G, Path, Rect, Defs, ClipPath } from "react-native-svg";
import { IconProps } from "../types";
export default function PlansIcon(props: SvgProps & IconProps) {
  const { size, color, width, height } = props;
  return (
    <Svg
      width={size || width || 20}
      height={size || height || 20}
      viewBox="0 0 20 21"
      fill="none"
      {...props}
    >
      <G clipPath="url(#plans-icon_svg__plans-icon_svg__clip0)">
        <Path
          d="M10 5.22l1.545 3.13L15 8.855l-2.5 2.435.59 3.44L10 13.105 6.91 14.73l.59-3.44L5 8.855l3.455-.505L10 5.22z"
          stroke={color || "#000"}
          strokeWidth={1.75}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Rect
        x={0.875}
        y={2.009}
        width={18.25}
        height={16.423}
        rx={3.125}
        stroke={color || "#000"}
        strokeWidth={1.75}
      />
      <Defs>
        <ClipPath id="plans-icon_svg__plans-icon_svg__clip0">
          <Path fill="#fff" transform="translate(4 4.22)" d="M0 0h12v12H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
