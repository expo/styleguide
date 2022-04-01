import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconProps } from "../../types";
export default function BuildIcon(props: SvgProps & IconProps) {
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
        d="M10 .023l8.962 4.485v10.984L10 19.977l-8.96-4.485V4.508L10 .023zM2.89 6.576v7.773l6.186 3.096V9.67L2.89 6.576zm8.036 3.093v7.776l6.186-3.096V6.576L10.925 9.67zm5.044-4.59L10 8.064 4.031 5.079l5.97-2.987 5.968 2.987z"
        fill={color || "#000"}
      />
    </Svg>
  );
}
