import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { IconProps } from "../../types";
export default function ActivityIcon(props: SvgProps & IconProps) {
  const { size, color, width, height } = props;
  return (
    <Svg
      width={size || width || 20}
      height={size || height || 20}
      viewBox="0 0 20 21"
      fill="none"
      {...props}
    >
      <G clipPath="url(#activity-icon_svg__activity-icon_svg__clip0)">
        <Path
          d="M13.086 1.541l-9.947 8.742 6.385 1.711-2.61 6.905 9.947-8.741-6.386-1.711 2.61-6.906z"
          stroke={color || "#000"}
          strokeWidth={1.75}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="activity-icon_svg__activity-icon_svg__clip0">
          <Path fill="#fff" transform="translate(0 .22)" d="M0 0h20v20H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
