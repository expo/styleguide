import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
} & SvgProps;
function SvgBadgeIcon(props: Props) {
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
        d="M10 1C9.49794 1 9.09093 1.40701 9.09093 1.90909V3.724L9.09092 3.72728V5.54547C9.09092 6.04754 9.49793 6.45456 10 6.45456C10.5021 6.45456 10.9091 6.04754 10.9091 5.54547V3.73057L10.9091 3.72727V1.90909C10.9091 1.40701 10.5021 1 10 1Z"
        fill={color || "#000"}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.8182 3.72727H18.1818C19.186 3.72727 20 4.5413 20 5.54545V17.3636C20 18.3678 19.186 19.1818 18.1818 19.1818H1.81818C0.81403 19.1818 0 18.3678 0 17.3636V5.54546C0 4.5413 0.814028 3.72727 1.81818 3.72727H8.18182V5.54547C8.18182 6.54962 8.99585 7.36365 10 7.36365C11.0042 7.36365 11.8182 6.54962 11.8182 5.54547V3.72727ZM17.2727 11.4546H10.9091V10.5455H17.2727V11.4546ZM10.9091 13.2727H17.2727V12.3637H10.9091V13.2727ZM17.2727 15.0909H10.9091V14.1818H17.2727V15.0909ZM5.90992 9.18182C8.11354 9.18182 7.94872 12.1325 6.9697 13.601C7.94872 13.601 9.09256 14.5664 9.09091 15.5455H2.72727C2.72727 14.5664 3.86946 13.601 4.84848 13.601C3.86946 12.1325 3.70629 9.18182 5.90992 9.18182Z"
        fill={color || "#000"}
      />
    </Svg>
  );
}
export default SvgBadgeIcon;
