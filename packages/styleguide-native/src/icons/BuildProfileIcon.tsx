import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
} & SvgProps;
function SvgBuildProfileIcon(props: Props) {
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
        d="M0 3.33333C0 1.49238 1.49238 0 3.33333 0H16.6667C18.5076 0 20 1.49238 20 3.33333V16.6667C20 18.5076 18.5076 20 16.6667 20H3.33333C1.49238 20 0 18.5076 0 16.6667V3.33333ZM7.96296 4.07407C7.96296 3.66497 7.63132 3.33333 7.22222 3.33333C6.81312 3.33333 6.48148 3.66497 6.48148 4.07407V10.1264C5.61838 10.4315 5 11.2547 5 12.2222C5 13.1898 5.61838 14.0129 6.48148 14.318V15.9259C6.48148 16.335 6.81312 16.6667 7.22222 16.6667C7.63132 16.6667 7.96296 16.335 7.96296 15.9259V14.318C8.82607 14.0129 9.44444 13.1898 9.44444 12.2222C9.44444 11.2547 8.82607 10.4315 7.96296 10.1264V4.07407ZM13.1482 16.6666C12.7391 16.6666 12.4074 16.335 12.4074 15.9259L12.4074 9.87351C11.5443 9.56845 10.9259 8.74531 10.9259 7.77774C10.9259 6.81017 11.5443 5.98703 12.4074 5.68196V4.07403C12.4074 3.66493 12.7391 3.33329 13.1482 3.33329C13.5573 3.33329 13.8889 3.66493 13.8889 4.07403V5.68196C14.752 5.98703 15.3704 6.81017 15.3704 7.77774C15.3704 8.74531 14.752 9.56845 13.8889 9.87351L13.8889 15.9259C13.8889 16.335 13.5573 16.6666 13.1482 16.6666Z"
        fill={color || "#000"}
      />
    </Svg>
  );
}
export default SvgBuildProfileIcon;
