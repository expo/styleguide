import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
} & SvgProps;
function SvgPerformanceIcon(props: Props) {
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
        d="M8.61984 9.94771L8.61782 9.94564L17.3333 4.99349L12.3489 13.7627L12.347 13.7607C11.8637 14.5501 10.9934 15.0768 9.99998 15.0768C8.4812 15.0768 7.24998 13.8456 7.24998 12.3268C7.24998 11.3111 7.8007 10.4239 8.61984 9.94771Z"
        fill={color || "#000"}
      />
      <Path
        d="M9.99998 3.16016C11.7599 3.16016 13.404 3.65613 14.8001 4.51592L13.0867 5.48946C12.1453 5.06378 11.1003 4.82682 9.99998 4.82682C5.85784 4.82682 2.49998 8.18469 2.49998 12.3268C2.49998 14.0211 3.06177 15.5841 4.00924 16.8399H2.0194C1.26436 15.5076 0.833313 13.9675 0.833313 12.3268C0.833313 7.26421 4.93737 3.16016 9.99998 3.16016Z"
        fill={color || "#000"}
      />
      <Path
        d="M9.97607 21.4935C9.98404 21.4935 9.99201 21.4935 9.99998 21.4935C10.008 21.4935 10.0159 21.4935 10.0239 21.4935H9.97607Z"
        fill={color || "#000"}
      />
      <Path
        d="M17.9806 16.8399C18.7356 15.5076 19.1666 13.9675 19.1666 12.3268C19.1666 10.5668 18.6706 8.92257 17.8107 7.5264L16.837 9.23939C17.2629 10.181 17.5 11.2262 17.5 12.3268C17.5 14.0211 16.9382 15.5841 15.9907 16.8399H17.9806Z"
        fill={color || "#000"}
      />
    </Svg>
  );
}
export default SvgPerformanceIcon;
