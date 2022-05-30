import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconProps } from "../types";
export default function UserIcon(props: SvgProps & IconProps) {
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
        d="M12.917 13.403C15.609 9.364 16.062 1.25 10.002 1.25c-6.06 0-5.611 8.114-2.919 12.153-2.692 0-5.833 2.655-5.833 5.347h17.5c.005-2.692-3.141-5.347-5.833-5.347z"
        stroke={color || "#000"}
        strokeWidth={1.852}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
