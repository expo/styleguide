import * as React from "react";
import Svg, { SvgProps, Mask, Rect } from "react-native-svg";
import { IconProps } from "../types";
export default function GeneralIcon(props: SvgProps & IconProps) {
  const { size, color, width, height } = props;
  return (
    <Svg
      viewBox="0 0 20 20"
      fill="none"
      width={size || width || 20}
      height={size || height || 20}
      {...props}
    >
      <Mask id="general-icon_svg__a" fill="#fff">
        <Rect width={8.75} height={8.75} rx={1} />
      </Mask>
      <Rect
        width={8.75}
        height={8.75}
        rx={1}
        stroke={color || "#000"}
        strokeWidth={3.5}
        mask="url(#general-icon_svg__a)"
      />
      <Mask id="general-icon_svg__b" fill="#fff">
        <Rect y={11.25} width={8.75} height={8.75} rx={1} />
      </Mask>
      <Rect
        y={11.25}
        width={8.75}
        height={8.75}
        rx={1}
        stroke={color || "#000"}
        strokeWidth={3.5}
        mask="url(#general-icon_svg__b)"
      />
      <Mask id="general-icon_svg__c" fill="#fff">
        <Rect x={11.25} y={11.25} width={8.75} height={8.75} rx={1} />
      </Mask>
      <Rect
        x={11.25}
        y={11.25}
        width={8.75}
        height={8.75}
        rx={1}
        stroke={color || "#000"}
        strokeWidth={3.5}
        mask="url(#general-icon_svg__c)"
      />
      <Mask id="general-icon_svg__d" fill="#fff">
        <Rect x={11.25} width={8.75} height={8.75} rx={1} />
      </Mask>
      <Rect
        x={11.25}
        width={8.75}
        height={8.75}
        rx={1}
        stroke={color || "#000"}
        strokeWidth={3.5}
        mask="url(#general-icon_svg__d)"
      />
    </Svg>
  );
}
