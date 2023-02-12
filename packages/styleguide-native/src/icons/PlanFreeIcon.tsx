import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
} & SvgProps;
function SvgPlanFreeIcon(props: Props) {
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
        d="M16.5644 16.2736L9.99999 5.0504L3.43562 16.2736H16.5644ZM10.9324 1.83082C10.5153 1.11775 9.4847 1.11775 9.06763 1.83082L0.149401 17.0784C-0.271764 17.7985 0.247567 18.7039 1.08176 18.7039H18.9182C19.7524 18.7039 20.2717 17.7985 19.8506 17.0784L10.9324 1.83082Z"
        fill={color || "#000"}
      />
    </Svg>
  );
}
export default SvgPlanFreeIcon;
