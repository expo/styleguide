import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
} & SvgProps;
function SvgQuestionMarkIcon(props: Props) {
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
        d="M7.88843 14.0515H11.0629V13.8036C11.0819 11.7826 11.7397 10.858 13.2936 9.90467C15.0476 8.85605 16.1439 7.42612 16.1439 5.24309C16.1439 2.02097 13.6368 0 9.9952 0C6.65869 0 3.95135 1.84938 3.85602 5.47188H7.24973C7.33552 3.67969 8.632 2.82173 9.97613 2.82173C11.4347 2.82173 12.6072 3.79409 12.6072 5.29075C12.6072 6.62536 11.7207 7.54051 10.5672 8.26501C8.87985 9.31363 7.9075 10.3718 7.88843 13.8036V14.0515ZM9.55669 20C10.6816 20 11.6444 19.0658 11.6539 17.9028C11.6444 16.7588 10.6816 15.8246 9.55669 15.8246C8.39367 15.8246 7.44992 16.7588 7.45945 17.9028C7.44992 19.0658 8.39367 20 9.55669 20Z"
        fill={color || "#000"}
      />
    </Svg>
  );
}
export default SvgQuestionMarkIcon;
