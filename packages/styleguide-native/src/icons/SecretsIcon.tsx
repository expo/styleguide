import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
} & SvgProps;
function SvgSecretsIcon(props: Props) {
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
        d="M17.8388 2.18335L16.0902 3.93191M16.0902 3.93191L18.7131 6.55475L15.6531 9.61473L13.0302 6.99189M16.0902 3.93191L13.0302 6.99189M9.43695 10.5852C9.88838 11.0306 10.2472 11.5609 10.4929 12.1456C10.7385 12.7303 10.866 13.3578 10.8682 13.9919C10.8703 14.6261 10.747 15.2544 10.5052 15.8407C10.2635 16.427 9.90824 16.9598 9.45981 17.4082C9.01138 17.8566 8.47867 18.2119 7.89236 18.4536C7.30605 18.6953 6.67772 18.8187 6.04355 18.8165C5.40937 18.8144 4.78188 18.6869 4.19721 18.4412C3.61253 18.1956 3.08222 17.8368 2.6368 17.3853C1.76089 16.4784 1.27621 15.2638 1.28717 14.003C1.29812 12.7422 1.80383 11.5362 2.69538 10.6446C3.58692 9.75309 4.79296 9.24738 6.05374 9.23642C7.31453 9.22547 8.52917 9.71014 9.43608 10.5861L9.43695 10.5852ZM9.43695 10.5852L13.0302 6.99189"
        stroke={color || "#000"}
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
export default SvgSecretsIcon;
