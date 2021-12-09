import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconProps } from "../../types";
export default function AtIcon(props: SvgProps & IconProps) {
  const { size, color, width, height } = props;
  return (
    <Svg
      width={size || width || 20}
      height={size || height || 20}
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <Path
        d="M10.216 20c2.168 0 4.29-.51 5.24-1.05l-.752-2.205c-.814.334-2.564.775-4.313.775-4.96 0-7.652-2.631-7.667-7.438.015-4.35 2.495-7.629 7.553-7.629 3.658 0 7.058 1.75 7.05 6.526.008 2.974-.54 4.328-1.59 4.328-.524 0-.843-.396-.851-1.103V4.78h-2.38v.852h-.107c-.259-.669-1.871-1.3-3.583-1.042-2.03.297-4.22 1.963-4.236 5.492.015 3.582 2.054 5.415 4.457 5.545 1.727.098 3.278-.624 3.636-1.544h.091c.167 1.05.867 1.764 2.632 1.635 3.285-.183 4.54-2.83 4.533-6.564.007-5.408-3.567-9.15-9.614-9.15C3.774.004.024 4.058.016 10.174.024 16.386 3.743 20 10.216 20zm-.35-6.876c-1.985 0-2.654-1.521-2.662-3.133.008-1.735.958-2.868 2.647-2.868 1.924 0 2.502 1.02 2.51 2.845.023 2.069-.632 3.156-2.495 3.156z"
        fill="#596068"
      />
    </Svg>
  );
}
