import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconProps } from "../types";
export default function LogoutMobileIcon(props: SvgProps & IconProps) {
  const { size, color, width, height } = props;
  return (
    <Svg
      viewBox="0 0 21 20"
      fill="none"
      width={size || width || 20}
      height={size || height || 20}
      {...props}
    >
      <Path
        d="M14.104 3.739v-.032a2.04 2.04 0 00-2.04-2.04h-8.43a2.04 2.04 0 00-2.04 2.04v12.586a2.04 2.04 0 002.04 2.04h8.592c1.037 0 1.878-.84 1.878-1.878v0"
        stroke={color || "#000"}
        strokeWidth={2.04}
      />
      <Path
        d="M13.071 15.227v-3.17c-2.832 0-4.83 1.11-5.827 1.96-.182.155-.494.026-.475-.213.363-4.672 4.29-5.926 6.302-5.956V4.774l7.002 5.297-7.002 5.156z"
        fill={color || "#000"}
      />
    </Svg>
  );
}
