import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconProps } from "../../types";
export default function InvoicesIcon(props: SvgProps & IconProps) {
  const { size, color, width, height } = props;
  return (
    <Svg
      width={size || width || 20}
      height={size || height || 20}
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <Path
        d="M10.45 17.75l-.45-.27-.45.27-2.088 1.253-2.57-1.286-.484-.241-.433.324-1.767 1.325H2A1.125 1.125 0 01.875 18V3C.875 1.826 1.826.875 3 .875h14c1.174 0 2.125.951 2.125 2.125v15c0 .621-.504 1.125-1.125 1.125h-.208L16.025 17.8l-.433-.325-.483.242-2.57 1.286-2.089-1.253z"
        stroke={color || "#000"}
        strokeWidth={1.75}
      />
      <Path
        d="M4.444 5.183h11.112M4.444 7.88h11.112M4.444 10.813h9.226"
        stroke={color || "#000"}
      />
    </Svg>
  );
}
