import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconProps } from "../../types";
export default function TrashIcon(props: SvgProps & IconProps) {
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
        d="M18.927 2.345h-4.803V1.299C14.124.565 13.446 0 12.6 0H7.175C6.328 0 5.65.565 5.65 1.3v1.045H.847A.832.832 0 000 3.192c0 .48.367.848.847.848h1.046l1.045 13.163A2.827 2.827 0 005.763 20h8.22a2.827 2.827 0 002.825-2.797L17.88 4.068h1.046c.48 0 .847-.367.847-.848 0-.48-.367-.875-.847-.875zm-11.582-.65h5.084v.65H7.345v-.65zm.339 13.757h-.029c-.452 0-.819-.367-.847-.82l-.31-6.892a.816.816 0 01.818-.876h.029c.452 0 .819.368.847.82l.31 6.892a.869.869 0 01-.818.876zm5.282-.82a.864.864 0 01-.847.82h-.029a.869.869 0 01-.819-.876l.31-6.892c.03-.452.396-.82.848-.82h.029a.87.87 0 01.819.876l-.31 6.893z"
        fill={color || "#000"}
      />
    </Svg>
  );
}
