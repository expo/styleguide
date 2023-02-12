import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
} & SvgProps;
function SvgUpgradeIcon(props: Props) {
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
        d="M0.400025 2.32002C0.400025 1.25964 1.25964 0.400024 2.32003 0.400024L17.68 0.400025C18.7404 0.400025 19.6 1.25964 19.6 2.32002V12.88C19.6 13.9404 18.7404 14.8 17.68 14.8H10.846V7.28797L14.3368 10.7788C14.6672 11.1091 15.2028 11.1091 15.5331 10.7788C15.8635 10.4484 15.8635 9.91282 15.5331 9.58242L10.5985 4.6478C10.2682 4.31744 9.7325 4.31744 9.40218 4.6478L4.46753 9.58242C4.13717 9.91282 4.13717 10.4484 4.46753 10.7788C4.79789 11.1091 5.33351 11.1091 5.66387 10.7788L9.1541 7.28853V14.8H2.32003C1.25964 14.8 0.400024 13.9404 0.400024 12.88L0.400025 2.32002Z"
        fill={color || "#000"}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.8531 14.8V18.64C10.8531 19.1702 10.4705 19.6 9.99869 19.6C9.52677 19.6 9.14429 19.1702 9.14429 18.64V14.8H10.8531Z"
        fill={color || "#000"}
      />
    </Svg>
  );
}
export default SvgUpgradeIcon;
