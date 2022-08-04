import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../types";
export default function UpgradeIcon(props: IconProps) {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.4 2.32C.4 1.26 1.26.4 2.32.4h15.36c1.06 0 1.92.86 1.92 1.92v10.56c0 1.06-.86 1.92-1.92 1.92h-6.834V7.288l3.49 3.49a.846.846 0 001.197-1.196L10.6 4.648a.846.846 0 00-1.197 0L4.468 9.582a.846.846 0 001.196 1.197l3.49-3.49V14.8H2.32A1.92 1.92 0 01.4 12.88V2.32zM10.853 14.8v3.84c0 .53-.383.96-.854.96-.472 0-.855-.43-.855-.96V14.8h1.71z"
        fill={color || "#000"}
      />
    </Svg>
  );
}
