import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
} & SvgProps;
function SvgCommandLineIcon(props: Props) {
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
        d="M3.33333 0.579712C1.49238 0.579712 0 2.0721 0 3.91305V17.2464C0 19.0873 1.49238 20.5797 3.33333 20.5797H16.6667C18.5076 20.5797 20 19.0873 20 17.2464V3.91305C20 2.0721 18.5076 0.579712 16.6667 0.579712H3.33333ZM5.35928 6.02087L9.83766 10.585L5.35928 15.1492L4.03339 13.8482L7.23525 10.585L4.03339 7.32185L5.35928 6.02087ZM15.9667 13.8358H9.4652V15.6934H15.9667V13.8358Z"
        fill={color || "#000"}
      />
    </Svg>
  );
}
export default SvgCommandLineIcon;
