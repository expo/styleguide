import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
} & SvgProps;
function SvgAppleAppStoreIcon(props: Props) {
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
        d="M13.0298 3.20167C13.4726 2.43693 13.2115 1.45807 12.4468 1.01533C11.6821 0.572583 10.7032 0.833612 10.2605 1.59835L2.77811 14.5224H6.47571L13.0298 3.20167ZM5.53182 16.1528C4.85084 15.5683 4.11465 15.0212 3.47888 14.996C2.55119 14.9591 2.24195 15.4421 2.00931 15.8755L2.00066 15.8653L1.46046 16.7984C1.01771 17.5631 1.27874 18.5419 2.04348 18.9847C2.80822 19.4274 3.78708 19.1664 4.22982 18.4017L5.53182 16.1528Z"
        fill={color || "#000"}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.71766 11.3224C10.4045 11.3297 11.112 11.3987 11.5511 12.0488C12.0334 12.7627 12.0696 13.6813 11.8882 14.5224H1.6C0.716344 14.5224 0 13.806 0 12.9224C0 12.0387 0.716344 11.3224 1.6 11.3224H9.71766ZM13.677 14.5224H18.4C19.2837 14.5224 20 13.806 20 12.9224C20 12.0387 19.2837 11.3224 18.4 11.3224H11.8126L13.677 14.5224Z"
        fill={color || "#000"}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.04743 3.20167C6.60469 2.43693 6.86572 1.45807 7.63046 1.01533C8.39519 0.572583 9.37405 0.833612 9.8168 1.59835L11.87 5.14482L9.96863 8.24738L7.04743 3.20167ZM11.2961 10.5403L15.8474 18.4017C16.2902 19.1664 17.269 19.4274 18.0338 18.9847C18.7985 18.5419 19.0595 17.5631 18.6168 16.7984L12.4559 6.15686C12.0612 6.20943 11.7054 6.44005 11.4314 6.98812C10.6472 8.55661 10.9982 9.88669 11.2987 10.5408L11.2961 10.5403Z"
        fill={color || "#000"}
      />
    </Svg>
  );
}
export default SvgAppleAppStoreIcon;
