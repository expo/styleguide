import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../types";
export default function OrganizationIcon(props: IconProps) {
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
        d="M3.199 7.163H2a2 2 0 00-2 2V20h3.198V7.163zm13.603 0H18a2 2 0 012 2V20h-3.198V7.163z"
        fill={color || "#000"}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.21 2a2 2 0 012-2h7.58a2 2 0 012 2v18H4.21V2zm2.656 1.44h2.255v2.25H6.866V3.44zm6.28 0h-2.255v2.25h2.255V3.44zm-2.255 3.723h2.255v2.25h-2.255v-2.25zm-1.783 0H6.854v2.25h2.254v-2.25zm1.783 3.722h2.255v2.25h-2.255v-2.25zm-1.783 0H6.854v2.25h2.254v-2.25z"
        fill={color || "#000"}
      />
    </Svg>
  );
}
