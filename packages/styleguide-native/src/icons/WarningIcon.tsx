import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { IconProps } from "../../types";
export default function WarningIcon(props: SvgProps & IconProps) {
  const { size, color, width, height } = props;
  return (
    <Svg
      width={size || width || 20}
      height={size || height || 20}
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <G clipPath="url(#warning-icon_svg__warning-icon_svg__clip0)">
        <Path
          d="M8.102 1.477c.778-1.561 3.005-1.562 3.784-.001l7.564 15.16c.7 1.406-.322 3.059-1.892 3.059H2.442c-1.57 0-2.592-1.652-1.892-3.057l7.552-15.16zm3.784 4.475c0-.408-.218-.846-.534-1.172-.323-.333-.788-.594-1.331-.594-.542 0-1.016.26-1.348.59-.325.323-.56.761-.56 1.176 0 .318.125 1.963.247 3.5a809.363 809.363 0 00.225 2.77l.015.188.004.05v.004a1.416 1.416 0 002.833-.001v-.006l.004-.05.014-.187.05-.677c.043-.562.1-1.318.155-2.093.112-1.538.226-3.181.226-3.498zm-1.885 12.199a1.961 1.961 0 100-3.923 1.961 1.961 0 000 3.923z"
          fill={color || "#000"}
          stroke={color || "#000"}
          strokeWidth={0.65}
        />
      </G>
      <Defs>
        <ClipPath id="warning-icon_svg__warning-icon_svg__clip0">
          <Path fill="#fff" d="M0 0h20v20H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
