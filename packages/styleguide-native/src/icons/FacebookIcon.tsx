import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconProps } from "../types";
export default function FacebookIcon(props: SvgProps & IconProps) {
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
        d="M20 10.06C20 4.505 15.523 0 10 0 4.476 0-.001 4.503-.001 10.06c0 5.023 3.657 9.185 8.438 9.94v-7.03h-2.54v-2.91h2.54V7.845c0-2.521 1.493-3.914 3.777-3.914 1.095 0 2.239.196 2.239.196v2.476h-1.261c-1.242 0-1.63.776-1.63 1.572v1.887h2.774l-.444 2.908h-2.33V20C16.343 19.245 20 15.083 20 10.06z"
        fill={color || "#000"}
      />
    </Svg>
  );
}
