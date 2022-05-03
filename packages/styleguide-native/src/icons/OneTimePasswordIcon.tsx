import * as React from "react";
import Svg, { SvgProps, Path, Rect } from "react-native-svg";
import { IconProps } from "../types";
export default function OneTimePasswordIcon(props: SvgProps & IconProps) {
  const { size, color, width, height } = props;
  return (
    <Svg
      width={size || width || 20}
      height={size || height || 20}
      viewBox="0 0 20 22"
      fill="none"
      {...props}
    >
      <Path
        d="M14.287 15.341v2.547a2.279 2.279 0 01-2.279 2.279H4.033a2.279 2.279 0 01-2.278-2.279V4.217a2.279 2.279 0 012.278-2.279h7.975a2.279 2.279 0 012.279 2.279v2.546"
        stroke={color || "#000"}
        strokeWidth={2.01}
      />
      <Rect
        width={6.031}
        height={3.016}
        rx={1.005}
        transform="matrix(-1 0 0 1 10.802 1)"
        fill={color || "#000"}
      />
      <Path
        d="M6.588 13.13h1.154l-.115-1.27 1.053.736.576-1.01-1.153-.534 1.153-.533-.576-1.01-1.053.736.115-1.27H6.588l.116 1.27-1.053-.736-.577 1.01 1.154.534-1.154.533.577 1.01 1.053-.736-.116 1.27zm5.267 0h1.154l-.115-1.27 1.053.736.577-1.01-1.154-.534 1.154-.533-.577-1.01-1.053.736.115-1.27h-1.154l.116 1.27-1.053-.736-.577 1.01 1.154.534-1.154.533.577 1.01 1.053-.736-.116 1.27zm5.389 0h1.154l-.116-1.27 1.053.736.577-1.01-1.154-.534 1.154-.533-.577-1.01-1.053.736.116-1.27h-1.154l.115 1.27-1.053-.736-.577 1.01 1.154.534-1.154.533.577 1.01 1.053-.736-.115 1.27z"
        fill={color || "#000"}
      />
    </Svg>
  );
}
