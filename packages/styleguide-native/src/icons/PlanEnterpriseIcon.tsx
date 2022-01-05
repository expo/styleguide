import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconProps } from "../../types";
export default function PlanEnterpriseIcon(props: SvgProps & IconProps) {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.932 1.83a1.08 1.08 0 00-1.864 0L.149 17.079a1.08 1.08 0 00.933 1.626h17.836a1.08 1.08 0 00.933-1.626L10.932 1.831zm5.632 14.444l-1.225-2.095H4.661l-1.225 2.095h13.128zm-3.458-5.912l1.19 2.035H5.704l1.19-2.035h6.213zm-1.042-1.783L10 5.051 7.936 8.579h4.128z"
        fill={color || "#000"}
      />
    </Svg>
  );
}
