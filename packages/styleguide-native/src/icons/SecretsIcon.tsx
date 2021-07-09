import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconProps } from "../../types";
export default function SecretsIcon(props: SvgProps & IconProps) {
  const { size, color, width, height } = props;
  return (
    <Svg
      width={size || width || 20}
      height={size || height || 20}
      viewBox="0 0 20 21"
      fill="none"
      {...props}
    >
      <Path
        d="M17.839 2.183L16.09 3.932m0 0l2.623 2.623-3.06 3.06-2.623-2.623m3.06-3.06l-3.06 3.06m-3.593 3.593a4.81 4.81 0 11-6.8 6.8 4.808 4.808 0 016.8-6.799h0zm0 0l3.593-3.593"
        stroke={color || "#000"}
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
