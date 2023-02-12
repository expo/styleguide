import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
} & SvgProps;
function SvgUploadIcon(props: Props) {
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
        d="M5.28334 10.0834H14.3667L9.825 2.81675L5.28334 10.0834Z"
        fill={color || "#000"}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.9083 1.00007C18.9083 1.50173 18.5017 1.9084 18 1.9084L1.65 1.9084C1.14834 1.9084 0.741669 1.50173 0.741669 1.00007C0.741669 0.49841 1.14834 0.0917358 1.65 0.0917358L18 0.0917373C18.5017 0.0917373 18.9083 0.498412 18.9083 1.00007Z"
        fill={color || "#000"}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.825 9.17505C10.3267 9.17505 10.7333 9.58173 10.7333 10.0834L10.7333 19.1667C10.7333 19.6684 10.3267 20.075 9.825 20.075C9.32334 20.075 8.91667 19.6684 8.91667 19.1667L8.91667 10.0834C8.91667 9.58173 9.32334 9.17505 9.825 9.17505Z"
        fill={color || "#000"}
      />
    </Svg>
  );
}
export default SvgUploadIcon;
