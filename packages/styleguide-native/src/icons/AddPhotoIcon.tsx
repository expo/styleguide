import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconProps } from "../../types";
export default function AddPhotoIcon(props: SvgProps & IconProps) {
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
        d="M17.25 1.75a.75.75 0 00-1.5 0v2h-2a.75.75 0 000 1.5h2v2a.75.75 0 001.5 0v-2h2a.75.75 0 000-1.5h-2v-2zM4.152 5.673L3.692 7H2a2 2 0 00-2 2v8a2 2 0 002 2h11a2 2 0 002-2V9a2 2 0 00-2-2h-1.692l-.46-1.327A1 1 0 009.903 5H5.097a1 1 0 00-.945.673zM7.5 15.5a3 3 0 100-6 3 3 0 000 6z"
        fill={color || "#000"}
      />
    </Svg>
  );
}
