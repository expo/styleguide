import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
} & SvgProps;
function SvgDebugIcon(props: Props) {
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
        d="M7.6838 6.90262L10.4638 9.65902L7.70058 12.3988L6.47076 11.1794L8.00411 9.65902L6.45398 8.12202L7.6838 6.90262Z"
        fill={color || "#000"}
      />
      <Path
        d="M9.53615 7.07448L12.3161 9.83088L13.5459 8.61148L11.9958 7.07449L13.5291 5.55415L12.2993 4.33475L9.53615 7.07448Z"
        fill={color || "#000"}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.833313 2.52893C0.833313 2.05273 1.22265 1.66669 1.70293 1.66669H18.297C18.7773 1.66669 19.1666 2.05273 19.1666 2.52893V14.1667C19.1666 14.6429 18.8136 15 18.3333 15H11.6666V16.6667H13.3333V18.3334H6.66665V16.6667H8.33331V15H1.66665C1.18637 15 0.833313 14.6429 0.833313 14.1667V2.52893ZM2.49998 13.3334V3.33335H17.5V13.3334L2.49998 13.3334Z"
        fill={color || "#000"}
      />
    </Svg>
  );
}
export default SvgDebugIcon;
