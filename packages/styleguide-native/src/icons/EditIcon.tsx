import React from "react";
import Svg, { Path, G, Defs, ClipPath } from "react-native-svg";
import { IconProps } from "../types";
export default function EditIcon(props: IconProps) {
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
        clipPath="url(#edit-icon_svg__edit-icon_svg__clip0_3427_2475)"
        stroke={color || "#000"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M9.167 3.333H3.333A1.667 1.667 0 001.667 5v11.667a1.667 1.667 0 001.666 1.666H15a1.666 1.666 0 001.667-1.666v-5.834" />
        <Path d="M15.417 2.083a1.768 1.768 0 112.5 2.5L10 12.5l-3.333.833L7.5 10l7.917-7.917z" />
      </G>
      <Defs>
        <ClipPath id="edit-icon_svg__edit-icon_svg__clip0_3427_2475">
          <Path fill="#fff" d="M0 0h20v20H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
