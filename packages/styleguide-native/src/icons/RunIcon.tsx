import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconProps } from "../../types";
export default function RunIcon(props: SvgProps & IconProps) {
  const { size, color, width, height } = props;
  return (
    <Svg
      width={size || width || 20}
      height={size || height || 20}
      viewBox="0 0 20 22"
      fill="none"
      {...props}
    >
      <Path
        d="M15.75 2.959C15.75 4.087 14.823 5 13.676 5c-1.146 0-2.075-.914-2.075-2.042 0-1.128.93-2.042 2.075-2.042 1.147 0 2.076.914 2.076 2.042z"
        fill={color || "#000"}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.444 5.832h2.472l4.065 3.914h1.186v1.998h-2.014L14.368 9.06l-.252 3.683 1.785 1.757v6.582h-2.03v-5.755l-1.97-1.94-.825 4.374-6.172-1.012.334-1.97 4.205.69.804-4.263.244-2.836-1.335.535v2.52h-2.03V7.563l4.318-1.731zM2.909 2.428H8.4v1.998H2.91V2.428zm-1.384 3.83h3.676v1.997H1.525V6.257zm-.692 3.786h4.324v1.997H.833v-1.997z"
        fill={color || "#000"}
      />
    </Svg>
  );
}
