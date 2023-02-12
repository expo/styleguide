import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
} & SvgProps;
function SvgErrorIcon(props: Props) {
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
        d="M4.16667 1.66669C2.78596 1.66669 1.66667 2.78597 1.66667 4.16669V15.8334C1.66667 17.2141 2.78596 18.3334 4.16667 18.3334H15.8333C17.214 18.3334 18.3333 17.2141 18.3333 15.8334V4.16669C18.3333 2.78598 17.2141 1.66669 15.8333 1.66669H4.16667ZM7.25585 6.07735C6.93041 5.75191 6.40277 5.75191 6.07733 6.07735C5.7519 6.40278 5.7519 6.93042 6.07733 7.25586L8.82141 9.99994L6.07734 12.744C5.7519 13.0695 5.7519 13.5971 6.07734 13.9225C6.40277 14.248 6.93041 14.248 7.25585 13.9225L9.99992 11.1784L12.744 13.9225C13.0694 14.248 13.5971 14.248 13.9225 13.9225C14.248 13.5971 14.248 13.0695 13.9225 12.744L11.1784 9.99994L13.9225 7.25586C14.248 6.93042 14.248 6.40278 13.9225 6.07735C13.5971 5.75191 13.0694 5.75191 12.744 6.07735L9.99992 8.82143L7.25585 6.07735Z"
        fill={color || "#000"}
      />
    </Svg>
  );
}
export default SvgErrorIcon;
