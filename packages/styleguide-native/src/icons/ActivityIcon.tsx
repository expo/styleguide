import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
} & SvgProps;
function SvgActivityIcon(props: Props) {
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
        d="M13.7064 0.162894C14.048 0.402291 14.1846 0.846371 14.0377 1.23972L11.6915 7.52066L17.3293 9.04968C17.6517 9.1371 17.9003 9.39699 17.9762 9.72588C18.0522 10.0548 17.9431 10.3993 17.6924 10.6222L7.40602 19.7721C7.09394 20.0497 6.63518 20.0765 6.2936 19.8371C5.95203 19.5977 5.81542 19.1536 5.96235 18.7603L8.30854 12.4793L2.67067 10.9503C2.34834 10.8629 2.09972 10.603 2.02377 10.2741C1.94783 9.94523 2.05689 9.60073 2.30755 9.37777L12.594 0.22791C12.9061 -0.0496908 13.3648 -0.0765032 13.7064 0.162894ZM4.77215 9.62397L9.74268 10.972C9.98961 11.039 10.197 11.2085 10.3137 11.4388C10.4303 11.669 10.4453 11.9385 10.3549 12.1805L8.93948 15.9696L15.2279 10.376L10.2573 9.028C10.0104 8.96103 9.80297 8.79146 9.68633 8.56121C9.5697 8.33096 9.55474 8.06152 9.64515 7.81949L11.0605 4.03042L4.77215 9.62397Z"
        fill={color || "#000"}
      />
    </Svg>
  );
}
export default SvgActivityIcon;
