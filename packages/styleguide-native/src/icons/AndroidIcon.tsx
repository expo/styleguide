import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
} & SvgProps;
function SvgAndroidIcon(props: Props) {
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
        d="M14.219 12.3251C13.798 12.3251 13.4556 11.9813 13.4556 11.559C13.4556 11.1367 13.798 10.7932 14.219 10.7932C14.6399 10.7932 14.9823 11.1367 14.9823 11.559C14.9823 11.9813 14.6399 12.3251 14.219 12.3251ZM5.78099 12.3251C5.36002 12.3251 5.01762 11.9813 5.01762 11.559C5.01762 11.1367 5.36002 10.7932 5.78099 10.7932C6.20194 10.7932 6.54436 11.1367 6.54436 11.559C6.54436 11.9813 6.20194 12.3251 5.78099 12.3251ZM14.4928 7.71178L16.0185 5.06088C16.106 4.90851 16.0539 4.71389 15.9023 4.6259C15.7507 4.53816 15.5564 4.59035 15.4687 4.74247L13.9239 7.42692C12.7425 6.88606 11.4157 6.5848 9.99997 6.5848C8.58423 6.5848 7.25744 6.88606 6.07608 7.42692L4.53125 4.74247C4.44354 4.59035 4.24929 4.53816 4.09765 4.6259C3.94602 4.71389 3.89374 4.90851 3.98145 5.06088L5.5072 7.71178C2.8873 9.14125 1.09545 11.8021 0.833313 14.9456H19.1666C18.9043 11.8021 17.1124 9.14125 14.4928 7.71178Z"
        fill={color || "#000"}
      />
    </Svg>
  );
}
export default SvgAndroidIcon;
