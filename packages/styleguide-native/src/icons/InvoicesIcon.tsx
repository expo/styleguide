import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconProps } from "../types";
export default function InvoicesIcon(props: SvgProps & IconProps) {
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
        d="M1.657 19.125H.875V.875h18.25v18.25h-.68l-1.589-1.302-.526-.43-.547.402-1.515 1.115-1.48-1.11-.526-.394-.524.394-1.476 1.106L8.788 17.8l-.525-.394-.525.394-1.475 1.106L4.788 17.8l-.485-.364-.511.326-2.135 1.363z"
        stroke={color || "#000"}
        strokeWidth={1.75}
      />
      <Path
        d="M15 5.75h.75v-1.5H15v1.5zm-11 0h11v-1.5H4v1.5zm11 3h.75v-1.5H15v1.5zm-11 0h11v-1.5H4v1.5zm7 3h.75v-1.5H11v1.5zm-7 0h7v-1.5H4v1.5z"
        fill={color || "#000"}
      />
    </Svg>
  );
}
