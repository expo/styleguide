import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { IconProps } from "../types";
export default function CreditCardIcon(props: SvgProps & IconProps) {
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
        clipPath="url(#credit-card-icon_svg__credit-card-icon_svg__clip0_2791_2830)"
        fillRule="evenodd"
        clipRule="evenodd"
        fill={color || "#000"}
      >
        <Path d="M2.5 2.5A2.5 2.5 0 000 5v10a2.5 2.5 0 002.5 2.5h15A2.5 2.5 0 0020 15V5a2.5 2.5 0 00-2.5-2.5h-15zM1.667 5c0-.46.373-.833.833-.833h15c.46 0 .833.373.833.833v1.75H1.667V5zm0 3.25V15c0 .46.373.833.833.833h15c.46 0 .833-.373.833-.833V8.25H1.667z" />
        <Path d="M12.704 9.808a2.606 2.606 0 100 4.514 2.606 2.606 0 100-4.514zm-1.303 3.863c.173 0 .34-.027.495-.078a2.594 2.594 0 01-.495-1.528 2.6 2.6 0 01.495-1.528 1.606 1.606 0 10-.495 3.134zm4.212-1.606a1.606 1.606 0 11-3.212 0 1.606 1.606 0 013.212 0z" />
      </G>
      <Defs>
        <ClipPath id="credit-card-icon_svg__credit-card-icon_svg__clip0_2791_2830">
          <Path fill="#fff" d="M0 0h20v20H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
