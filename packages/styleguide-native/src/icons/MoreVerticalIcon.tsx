import React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import { IconProps } from "../types";
export default function MoreVerticalIcon(props: IconProps) {
  const { size, color, width, height } = props;
  return (
    <Svg
      viewBox="0 0 20 20"
      fill="none"
      width={size || width || 20}
      height={size || height || 20}
      {...props}
    >
      <Circle
        cx={10}
        cy={15.833}
        r={1.741}
        transform="rotate(-90 10 15.833)"
        fill={color || "#000"}
      />
      <Circle
        cx={10}
        cy={10}
        r={1.741}
        transform="rotate(-90 10 10)"
        fill={color || "#000"}
      />
      <Circle
        cx={10}
        cy={4.167}
        r={1.741}
        transform="rotate(-90 10 4.167)"
        fill={color || "#000"}
      />
    </Svg>
  );
}
