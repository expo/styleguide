import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
} & SvgProps;
function SvgScanIcon(props: Props) {
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
        d="M1.87499 1.25C1.52981 1.25 1.24999 1.52982 1.24999 1.875V5.625C1.24999 5.97018 0.970163 6.25 0.624985 6.25C0.279807 6.25 -1.52588e-05 5.97018 -1.52588e-05 5.625V1.875C-1.52588e-05 0.839467 0.839452 0 1.87499 0H5.62499C5.97017 0 6.24999 0.279822 6.24999 0.625C6.24999 0.970179 5.97017 1.25 5.62499 1.25H1.87499ZM13.75 0.625C13.75 0.279822 14.0298 0 14.375 0H18.125C19.1605 0 20 0.839467 20 1.875V5.625C20 5.97018 19.7202 6.25 19.375 6.25C19.0298 6.25 18.75 5.97018 18.75 5.625V1.875C18.75 1.52982 18.4702 1.25 18.125 1.25H14.375C14.0298 1.25 13.75 0.970179 13.75 0.625ZM0.624985 13.75C0.970163 13.75 1.24999 14.0298 1.24999 14.375V18.125C1.24999 18.4702 1.52981 18.75 1.87499 18.75H5.62499C5.97017 18.75 6.24999 19.0298 6.24999 19.375C6.24999 19.7202 5.97017 20 5.62499 20H1.87499C0.839452 20 -1.52588e-05 19.1605 -1.52588e-05 18.125V14.375C-1.52588e-05 14.0298 0.279807 13.75 0.624985 13.75ZM19.375 13.75C19.7202 13.75 20 14.0298 20 14.375V18.125C20 19.1605 19.1605 20 18.125 20H14.375C14.0298 20 13.75 19.7202 13.75 19.375C13.75 19.0298 14.0298 18.75 14.375 18.75H18.125C18.4702 18.75 18.75 18.4702 18.75 18.125V14.375C18.75 14.0298 19.0298 13.75 19.375 13.75Z"
        fill={color || "#000"}
      />
      <Path
        d="M3.75 5.625C3.75 5.27982 4.02982 5 4.375 5C4.72018 5 5 5.27982 5 5.625V14.375C5 14.7202 4.72018 15 4.375 15C4.02982 15 3.75 14.7202 3.75 14.375V5.625Z"
        fill={color || "#000"}
      />
      <Path
        d="M6.25 5.625C6.25 5.27982 6.52982 5 6.875 5C7.22018 5 7.5 5.27982 7.5 5.625V14.375C7.5 14.7202 7.22018 15 6.875 15C6.52982 15 6.25 14.7202 6.25 14.375V5.625Z"
        fill={color || "#000"}
      />
      <Path
        d="M8.75 5.625C8.75 5.27982 9.02983 5 9.375 5C9.72018 5 10 5.27982 10 5.625V14.375C10 14.7202 9.72018 15 9.375 15C9.02983 15 8.75 14.7202 8.75 14.375V5.625Z"
        fill={color || "#000"}
      />
      <Path
        d="M11.25 5.625C11.25 5.27982 11.5298 5 11.875 5H13.125C13.4702 5 13.75 5.27982 13.75 5.625V14.375C13.75 14.7202 13.4702 15 13.125 15H11.875C11.5298 15 11.25 14.7202 11.25 14.375V5.625Z"
        fill={color || "#000"}
      />
      <Path
        d="M15 5.625C15 5.27982 15.2798 5 15.625 5C15.9702 5 16.25 5.27982 16.25 5.625V14.375C16.25 14.7202 15.9702 15 15.625 15C15.2798 15 15 14.7202 15 14.375V5.625Z"
        fill={color || "#000"}
      />
    </Svg>
  );
}
export default SvgScanIcon;
