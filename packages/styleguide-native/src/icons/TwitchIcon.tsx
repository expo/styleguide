import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../types";
export default function TwitchIcon(props: IconProps) {
  const { size, color, width, height } = props;
  return (
    <Svg
      viewBox="0 0 20 20"
      fill="none"
      width={size || width || 20}
      height={size || height || 20}
      {...props}
    >
      <Path
        d="M4.821 0L1.25 3.571V16.43h4.286V20l3.571-3.571h2.857L18.393 10V0H4.82zm12.143 9.286l-2.857 2.857H11.25l-2.5 2.5v-2.5H5.536V1.429h11.428v7.857z"
        fill={color || "#000"}
      />
      <Path
        d="M14.822 3.929h-1.43v4.285h1.43V3.93zm-3.929 0H9.464v4.285h1.429V3.93z"
        fill={color || "#000"}
      />
    </Svg>
  );
}
