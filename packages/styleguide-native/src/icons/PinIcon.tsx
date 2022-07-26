import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../types";
export default function PinIcon(props: IconProps) {
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
        d="M15.755 14.337l-1.453 2.517-5.034-2.907-2.906 5.034-1.323.354-.354-1.323L7.59 12.98l-5.034-2.906L4.01 7.556a1.937 1.937 0 012.647-.71l2.906-5.033a1.937 1.937 0 012.646-.709l5.034 2.906a1.937 1.937 0 01.709 2.647l-2.906 5.033a1.937 1.937 0 01.709 2.647z"
        fill={color || "#000"}
      />
    </Svg>
  );
}
