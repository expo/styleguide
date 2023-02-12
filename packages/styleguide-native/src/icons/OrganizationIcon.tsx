import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
} & SvgProps;
function SvgOrganizationIcon(props: Props) {
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
        d="M3.19879 7.16264H2.00073C0.896164 7.16264 0.000732422 8.05807 0.000732422 9.16264V20.0001H3.19879V7.16264Z"
        fill={color || "#000"}
      />
      <Path
        d="M16.8021 7.16264H18.0001C19.1047 7.16264 20.0001 8.05807 20.0001 9.16264V20.0001H16.8021V7.16264Z"
        fill={color || "#000"}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.21002 1.99991C4.21002 0.895338 5.10545 -9.15527e-05 6.21002 -9.15527e-05H13.7897C14.8943 -9.15527e-05 15.7897 0.895339 15.7897 1.99991V20.0001H4.21002V1.99991ZM6.86627 3.44063H9.12094V5.69063H6.86627V3.44063ZM13.1461 3.44063H10.8914V5.69063H13.1461V3.44063ZM10.8914 7.16264H13.1461V9.41264H10.8914V7.16264ZM9.10848 7.16264H6.85382V9.41264H9.10848V7.16264ZM10.8914 10.8851H13.1461V13.1351H10.8914V10.8851ZM9.10848 10.8851H6.85382V13.1351H9.10848V10.8851Z"
        fill={color || "#000"}
      />
    </Svg>
  );
}
export default SvgOrganizationIcon;
