import * as React from "react";
import Svg, {
  SvgProps,
  G,
  Path,
  Ellipse,
  Defs,
  ClipPath,
} from "react-native-svg";
import { IconProps } from "../../types";
export default function DeploymentsIcon(props: SvgProps & IconProps) {
  const { size, color, width, height } = props;
  return (
    <Svg
      width={size || width || 20}
      height={size || height || 20}
      viewBox="0 0 20 21"
      fill="none"
      {...props}
    >
      <G clipPath="url(#deployments-icon_svg__deployments-icon_svg__clip0)">
        <Path
          clipRule="evenodd"
          d="M18.855 1.331l-1.15 6.85a4 4 0 01-1.886 2.766l-6.943 4.171-3.836-3.822L9.175 4.15a4 4 0 012.958-1.965l6.722-.854z"
          stroke={color || "#000"}
          strokeWidth={1.75}
          strokeLinejoin="round"
        />
        <Path
          clipRule="evenodd"
          d="M4.974 11.517L.956 11.03l4.602-4.766L8.12 5.74l-3.147 5.778zm3.966 3.869l.592 3.867 4.718-4.566.397-2.725-5.707 3.424z"
          stroke={color || "#000"}
          strokeWidth={1.5}
          strokeLinejoin="round"
        />
        <Ellipse
          cx={13.528}
          cy={6.693}
          rx={1.816}
          ry={2.301}
          transform="rotate(44.984 13.528 6.693)"
          fill={color || "#000"}
        />
        <Path
          d="M4.067 14.262l-2.79 2.819m4.729-1.002l-2.791 2.819"
          stroke={color || "#000"}
          strokeWidth={1.5}
          strokeLinecap="round"
        />
      </G>
      <Defs>
        <ClipPath id="deployments-icon_svg__deployments-icon_svg__clip0">
          <Path fill="#fff" transform="translate(0 .22)" d="M0 0h20v20H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
