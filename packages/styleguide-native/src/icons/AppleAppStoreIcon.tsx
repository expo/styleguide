import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { IconProps } from "../../types";
export default function AppleAppStoreIcon(props: SvgProps & IconProps) {
  const { size, color, width, height } = props;
  return (
    <Svg
      width={size || width || 20}
      height={size || height || 20}
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <G
        clipPath="url(#apple-app-store-icon_svg__apple-app-store-icon_svg__clip0)"
        fillRule="evenodd"
        clipRule="evenodd"
        fill={color || "#000"}
      >
        <Path d="M13.03 3.202a1.6 1.6 0 10-2.77-1.604L2.779 14.522h3.698l6.554-11.32zm-7.498 12.95c-.681-.584-1.417-1.13-2.053-1.156-.928-.037-1.237.446-1.47.88l-.008-.01-.54.932a1.6 1.6 0 102.769 1.604l1.302-2.25z" />
        <Path d="M9.718 11.322c.687.008 1.394.077 1.833.727.482.714.519 1.632.337 2.473H1.6a1.6 1.6 0 010-3.2h8.118zm3.959 3.2H18.4a1.6 1.6 0 000-3.2h-6.587l1.864 3.2z" />
        <Path d="M7.047 3.202a1.6 1.6 0 012.77-1.604l2.053 3.547-1.901 3.102-2.922-5.045zm4.25 7.338l4.55 7.862a1.6 1.6 0 002.77-1.604L12.456 6.157c-.395.052-.75.283-1.025.831-.784 1.569-.433 2.899-.132 3.553h-.003z" />
      </G>
      <Defs>
        <ClipPath id="apple-app-store-icon_svg__apple-app-store-icon_svg__clip0">
          <Path fill="#fff" d="M0 0h20v20H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
