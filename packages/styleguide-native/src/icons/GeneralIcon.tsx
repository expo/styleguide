import * as React from "react";
import Svg, { SvgProps, Mask, Rect } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
} & SvgProps;
function SvgGeneralIcon(props: Props) {
  const { size, color, width = 24, height = 24 } = props;
  let _width = width;
  let _height = height;
  const sizes: {
    [i: string]: number;
  } = {
    xs: 16,
    sm: 20,
    md: 24,
    lg: 28,
    xl: 32,
  };
  if (size && typeof size === "string" && sizes[size]) {
    _width = sizes[size];
    _height = sizes[size];
  }
  return (
    <Svg width={_width} height={_height} fill="none" {...props}>
      <Mask id="path-1-inside-1" fill="white">
        <Rect width={8.75} height={8.75} rx={1} />
      </Mask>
      <Rect
        width={8.75}
        height={8.75}
        rx={1}
        stroke={color || "#000"}
        strokeWidth={3.5}
        mask="url(#path-1-inside-1)"
      />
      <Mask id="path-2-inside-2" fill="white">
        <Rect y={11.25} width={8.75} height={8.75} rx={1} />
      </Mask>
      <Rect
        y={11.25}
        width={8.75}
        height={8.75}
        rx={1}
        stroke={color || "#000"}
        strokeWidth={3.5}
        mask="url(#path-2-inside-2)"
      />
      <Mask id="path-3-inside-3" fill="white">
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
        mask="url(#path-3-inside-3)"
      />
      <Mask id="path-4-inside-4" fill="white">
        <Rect x={11.25} width={8.75} height={8.75} rx={1} />
      </Mask>
      <Rect
        x={11.25}
        width={8.75}
        height={8.75}
        rx={1}
        stroke={color || "#000"}
        strokeWidth={3.5}
        mask="url(#path-4-inside-4)"
      />
    </Svg>
  );
}
export default SvgGeneralIcon;
