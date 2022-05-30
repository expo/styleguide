import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconProps } from "../types";
export default function UserFilledIcon(props: SvgProps & IconProps) {
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
        d="M13.365 13.889C16.473 9.273 16.995 0 10.002 0 3.008 0 3.526 9.273 6.633 13.889c-2.772 0-5.956 2.415-6.61 5.12-.13.538.328.991.886.991h18.182c.557 0 1.016-.452.887-.989-.65-2.706-3.84-5.122-6.613-5.122z"
        fill={color || "#000"}
      />
    </Svg>
  );
}
