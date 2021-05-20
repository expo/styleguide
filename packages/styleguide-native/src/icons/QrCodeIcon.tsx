import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { IconProps } from "../../types";
export default function QrCodeIcon(props: SvgProps & IconProps) {
  const { size, color, width, height } = props;
  return (
    <Svg
      width={size || width || 20}
      height={size || height || 20}
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <G
        opacity={0.91}
        clipPath="url(#qr-code-icon_svg__qr-code-icon_svg__clip0)"
        stroke={color || "#000"}
      >
        <Path strokeWidth={2} d="M1.018 14h5v5h-5zm0-13h5v5h-5zM14 1h5v5h-5z" />
        <Path d="M.443 12V8.5H8.5V5H10" />
        <Path d="M2.5 10v1.5h4V10M7.995.5H11.5V3H8m3.5 4V4.5m-.998 15.52L10.5 14.5H8.49l.003-2.997h2.01V8.496H13.5V11m-5.002 9l.002-4m4-1.95v5.45h7v-5.45" />
        <Path d="M12 12.5h2.5v2h3v-2h2V8" />
        <Path d="M15.5 8v2.5H18m-.5 7.5v-1.5h-3V18" />
      </G>
      <Defs>
        <ClipPath id="qr-code-icon_svg__qr-code-icon_svg__clip0">
          <Path fill="#fff" d="M0 0h20v20H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
