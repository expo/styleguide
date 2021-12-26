import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconProps } from "../../types";
export default function ProjectTransferIcon(props: SvgProps & IconProps) {
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
        d="M11.089 4h-7.84a1.04 1.04 0 00-1.04 1.04v9.92c0 .574.465 1.04 1.04 1.04h9.92a1.04 1.04 0 001.04-1.04v-1.783l2-1.664v3.447a3.04 3.04 0 01-3.04 3.04h-9.92a3.04 3.04 0 01-3.04-3.04V5.04A3.04 3.04 0 013.249 2h7.84v2zm5.12 5.822l-2 1.664V5.04A1.04 1.04 0 0013.169 4h-.78V2l3.82 3.178v4.644z"
        fill={color || "#000"}
      />
      <Path
        d="M12.389 13V9.665c-2.894 0-4.93 1.188-5.93 2.085-.174.157-.475.028-.458-.21.35-4.948 4.345-6.273 6.388-6.305V2L19 7.5 12.389 13z"
        fill="#596068"
      />
    </Svg>
  );
}
