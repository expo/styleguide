import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
} & SvgProps;
function SvgPlanEnterpriseIcon(props: Props) {
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
        d="M10.9324 1.83094C10.5153 1.11788 9.4847 1.11788 9.06763 1.83094L0.149401 17.0785C-0.271764 17.7986 0.247568 18.704 1.08176 18.704H18.9182C19.7524 18.704 20.2718 17.7986 19.8506 17.0785L10.9324 1.83094ZM16.5644 16.2737L15.3391 14.1788H4.66094L3.43562 16.2737H16.5644ZM13.1064 10.3616L14.2966 12.3966H5.70334L6.8936 10.3616H13.1064ZM12.064 8.57934L10 5.05052L7.93601 8.57934H12.064Z"
        fill={color || "#000"}
      />
    </Svg>
  );
}
export default SvgPlanEnterpriseIcon;
