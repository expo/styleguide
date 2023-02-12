import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
} & SvgProps;
function SvgCommitIcon(props: Props) {
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
        d="M3.33333 0C1.49238 0 0 1.49238 0 3.33333V16.6667C0 18.5076 1.49238 20 3.33333 20H16.6667C18.5076 20 20 18.5076 20 16.6667V3.33333C20 1.49238 18.5076 0 16.6667 0H3.33333ZM11.8414 11.8444C12.3298 11.3558 12.6042 10.6932 12.6042 10.0022C12.6042 9.31131 12.3298 8.64867 11.8414 8.16011C11.353 7.67154 10.6907 7.39707 10 7.39707C9.30933 7.39707 8.64695 7.67154 8.15858 8.16011C7.6702 8.64867 7.39583 9.31131 7.39583 10.0022C7.39583 10.6932 7.6702 11.3558 8.15858 11.8444C8.64695 12.333 9.30933 12.6074 10 12.6074C10.6907 12.6074 11.353 12.333 11.8414 11.8444ZM12.6549 13.2116C13.402 12.5942 13.9108 11.7358 14.0938 10.7838H17.5521C17.7593 10.7838 17.958 10.7015 18.1045 10.5549C18.251 10.4083 18.3333 10.2095 18.3333 10.0022C18.3333 9.79497 18.251 9.59618 18.1045 9.4496C17.958 9.30304 17.7593 9.22069 17.5521 9.22069H14.0938C13.9119 8.26781 13.4035 7.4082 12.6563 6.78991C11.9091 6.17161 10.9697 5.83333 10 5.83333C9.03028 5.83333 8.09092 6.17161 7.34368 6.78991C6.59645 7.4082 6.08812 8.26781 5.90625 9.22069H2.44792C2.24072 9.22069 2.042 9.30304 1.89549 9.4496C1.74898 9.59618 1.66667 9.79497 1.66667 10.0022C1.66667 10.2095 1.74898 10.4083 1.89549 10.5549C2.042 10.7015 2.24072 10.7838 2.44792 10.7838H5.90625C6.08923 11.7358 6.59801 12.5942 7.34512 13.2116C8.09222 13.829 9.03097 14.1667 10 14.1667C10.969 14.1667 11.9078 13.829 12.6549 13.2116Z"
        fill={color || "#000"}
      />
    </Svg>
  );
}
export default SvgCommitIcon;
