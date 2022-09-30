import React from "react";
import Svg, { Path, G, Defs, ClipPath } from "react-native-svg";
import { IconProps } from "../types";
export default function EasMetadataIcon(props: IconProps) {
  const { size, color, width, height } = props;
  return (
    <Svg
      viewBox="0 0 20 20"
      fill="none"
      width={size || width || 20}
      height={size || height || 20}
      {...props}
    >
      <G clipPath="url(#eas-metadata-icon_svg__eas-metadata-icon_svg__clip0_3475_2492)">
        <Path
          d="M3 8.32v9.18h14V8.32"
          stroke={color || "#000"}
          strokeWidth={2}
          strokeLinecap="round"
        />
        <Path
          d="M1 6.525L3.213 1.5H8l-.805 5.025S6.213 8.319 4 8.319 1 6.525 1 6.525zm18 0L16.787 1.5H12l.805 5.025S13.787 8.319 16 8.319s3-1.794 3-1.794z"
          stroke={color || "#000"}
          strokeWidth={2}
        />
        <Path
          d="M13 7.08l-.91-5.58H7.91L7 7.08s.5 1.794 3 1.794 3-1.795 3-1.795z"
          stroke={color || "#000"}
          strokeWidth={2}
        />
        <Path fill={color || "#000"} d="M7.25 12.5h5.5v4.736h-5.5z" />
      </G>
      <Defs>
        <ClipPath id="eas-metadata-icon_svg__eas-metadata-icon_svg__clip0_3475_2492">
          <Path fill="#fff" d="M0 0h20v20H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
