import * as React from "react";
import Svg, { SvgProps, Rect, Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
} & SvgProps;
function SvgAppleSimulatorIcon(props: Props) {
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
      <Rect
        x={3.75}
        y={0.75}
        width={12.5}
        height={18.5}
        rx={2.25}
        stroke={color || "#000"}
        strokeWidth={1.5}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.212 7.28065C11.3891 6.97476 11.2847 6.58322 10.9788 6.40612C10.6729 6.22902 10.2813 6.33343 10.1042 6.63933L7.11128 11.809H8.59032L11.212 7.28065ZM8.21277 12.4611C7.94038 12.2273 7.6459 12.0085 7.39159 11.9984C7.02052 11.9836 6.89682 12.1768 6.80377 12.3502L6.8003 12.3461L6.58422 12.7193C6.40712 13.0252 6.51153 13.4168 6.81743 13.5939C7.12332 13.771 7.51487 13.6666 7.69196 13.3607L8.21277 12.4611Z"
        fill={color || "#000"}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.88713 10.5289C10.1618 10.5319 10.4448 10.5595 10.6205 10.8195C10.8134 11.1051 10.8279 11.4725 10.7553 11.8089H6.64C6.28654 11.8089 6 11.5224 6 11.1689C6 10.8155 6.28654 10.5289 6.64 10.5289H9.88713ZM11.4708 11.8089H13.36C13.7135 11.8089 14 11.5224 14 11.1689C14 10.8155 13.7135 10.5289 13.36 10.5289H10.7251L11.4708 11.8089Z"
        fill={color || "#000"}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.81896 7.28065C8.64186 6.97476 8.74627 6.58322 9.05217 6.40612C9.35807 6.22902 9.74961 6.33343 9.92671 6.63933L10.748 8.05791L9.98744 9.29894L8.81896 7.28065ZM10.5184 10.2161L12.339 13.3607C12.5161 13.6666 12.9076 13.771 13.2135 13.5939C13.5194 13.4168 13.6238 13.0252 13.4467 12.7193L10.9824 8.46273C10.8245 8.48376 10.6822 8.57601 10.5725 8.79524C10.2588 9.42263 10.3993 9.95467 10.5195 10.2163L10.5184 10.2161Z"
        fill={color || "#000"}
      />
      <Path
        d="M7 1H13V2C13 2.55228 12.5523 3 12 3H8C7.44772 3 7 2.55228 7 2V1Z"
        fill={color || "#000"}
      />
    </Svg>
  );
}
export default SvgAppleSimulatorIcon;
