import React from "react";
import { IconProps } from "../types";
export function SettingsFilledIcon(props: IconProps) {
  const {
    title = "Settings-filled-icon",
    size,
    color,
    width,
    height,
    titleId,
  } = props;
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      width={size || width || "20px"}
      height={size || height || "20px"}
      role="img"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.927.4a.488.488 0 01.48-.4h3.186c.236 0 .438.169.48.4l.455 2.506a.488.488 0 00.766.308l2.036-1.47a.488.488 0 01.63.05l2.246 2.246c.17.169.19.436.05.63l-1.47 2.036a.488.488 0 00.308.766l2.505.455a.488.488 0 01.401.48v3.186a.488.488 0 01-.4.48l-2.506.455a.488.488 0 00-.308.766l1.47 2.036a.488.488 0 01-.05.63l-2.246 2.246a.488.488 0 01-.63.05l-2.036-1.47a.488.488 0 00-.766.308l-.455 2.505a.488.488 0 01-.48.401H8.407a.488.488 0 01-.48-.4l-.455-2.506a.488.488 0 00-.766-.308l-2.036 1.47a.488.488 0 01-.63-.05L1.794 15.96a.488.488 0 01-.05-.63l1.47-2.036a.488.488 0 00-.308-.766L.4 12.073a.488.488 0 01-.401-.48V8.407c0-.236.169-.438.4-.48l2.506-.455a.488.488 0 00.308-.766L1.744 4.67a.488.488 0 01.05-.63L4.04 1.794a.486.486 0 01.63-.05l2.036 1.47c.291.21.702.045.766-.308L7.927.4zM10 13.17a3.17 3.17 0 100-6.34 3.17 3.17 0 000 6.34z"
        fill={color || "var(--expo-theme-icon-default)"}
      />
    </svg>
  );
}
