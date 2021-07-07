import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconProps } from "../../types";
export default function AndroidIcon(props: SvgProps & IconProps) {
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
        d="M14.219 12.325a.766.766 0 010-1.532.765.765 0 010 1.532zm-8.438 0a.766.766 0 010-1.532.765.765 0 010 1.532zm8.712-4.613l1.525-2.651a.317.317 0 10-.55-.318l-1.544 2.684A9.393 9.393 0 0010 6.585a9.393 9.393 0 00-3.924.842L4.531 4.742a.317.317 0 10-.55.319l1.526 2.65c-2.62 1.43-4.412 4.091-4.674 7.235h18.334c-.263-3.144-2.055-5.805-4.674-7.234z"
        fill={color || "#000"}
      />
    </Svg>
  );
}
