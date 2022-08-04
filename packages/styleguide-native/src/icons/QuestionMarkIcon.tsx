import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../types";
export default function QuestionMarkIcon(props: IconProps) {
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
        d="M7.888 14.052h3.175v-.248c.019-2.021.677-2.946 2.23-3.9 1.755-1.048 2.85-2.478 2.85-4.66C16.144 2.02 13.638 0 9.996 0 6.66 0 3.951 1.85 3.856 5.472H7.25c.086-1.792 1.382-2.65 2.726-2.65 1.459 0 2.631.972 2.631 2.469 0 1.334-.886 2.25-2.04 2.974-1.687 1.049-2.66 2.107-2.679 5.539v.248zM9.557 20c1.125 0 2.087-.934 2.097-2.097-.01-1.144-.972-2.078-2.097-2.078-1.163 0-2.107.934-2.098 2.078A2.085 2.085 0 009.557 20z"
        fill={color || "#000"}
      />
    </Svg>
  );
}
