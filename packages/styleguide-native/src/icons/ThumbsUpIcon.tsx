import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { IconProps } from "../types";
export default function ThumbsUpIcon(props: SvgProps & IconProps) {
  const { size, color, width, height } = props;
  return (
    <Svg
      viewBox="0 0 20 20"
      fill="none"
      width={size || width || 20}
      height={size || height || 20}
      {...props}
    >
      <G
        clipPath="url(#thumbs-up-icon_svg__thumbs-up-icon_svg__clip0_2791_2864)"
        fill={color || "#000"}
      >
        <Path d="M11 3.66l2.92 6.46c.054.12.082.25.08.38v7.6c0 .504-.21.987-.585 1.343A2.054 2.054 0 0112 20H6a4.437 4.437 0 01-2.193-.673A4.135 4.135 0 012.3 17.672L.07 12.78A.908.908 0 010 12.4v-1.9c0-.756.317-1.48.88-2.015A3.082 3.082 0 013 7.65h4v-3.8c0-.756.317-1.48.88-2.015A3.082 3.082 0 0110 1c.266 0 .52.1.708.278.187.178.293.42.293.672v1.71zm8 5.84h-2c-.552 0-1 .425-1 .95V19c0 .525.448.95 1 .95h2c.552 0 1-.425 1-.95v-8.55c0-.525-.448-.95-1-.95z" />
      </G>
      <Defs>
        <ClipPath id="thumbs-up-icon_svg__thumbs-up-icon_svg__clip0_2791_2864">
          <Path fill="#fff" d="M0 0h20v20H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}