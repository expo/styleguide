import * as React from "react";
import Svg, { SvgProps, Path, Ellipse } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
} & SvgProps;
function SvgDeploymentsIcon(props: Props) {
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
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.855 1.33147L17.7041 8.18129C17.5103 9.3345 16.8216 10.3452 15.8192 10.9473L8.8763 15.1181L5.04025 11.2959L9.17549 4.14997C9.80084 3.06932 10.8949 2.34265 12.1335 2.18531L18.855 1.33147Z"
        stroke={color || "#000"}
        strokeWidth={1.75}
        strokeLinejoin="round"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.97448 11.5171L0.956126 11.0292L5.55765 6.26331L8.12086 5.73904L4.97448 11.5171Z"
        stroke={color || "#000"}
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.93955 15.3864L9.53241 19.2525L14.2502 14.6873L14.6474 11.9617L8.93955 15.3864Z"
        stroke={color || "#000"}
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
      <Ellipse
        cx={13.5279}
        cy={6.6927}
        rx={1.81606}
        ry={2.30139}
        transform="rotate(44.984 13.5279 6.6927)"
        fill={color || "#000"}
      />
      <Path
        d="M4.06699 14.2622L1.27625 17.0808"
        stroke={color || "#000"}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <Path
        d="M6.00553 16.0789L3.21478 18.8975"
        stroke={color || "#000"}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </Svg>
  );
}
export default SvgDeploymentsIcon;
