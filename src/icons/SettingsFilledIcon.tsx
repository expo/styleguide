import React from "react";
import { IconProps } from "../../types";
export default function SettingsFilledIcon(props: IconProps) {
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
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
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
        d="M9.927 2.266a.488.488 0 01.48-.401h3.186c.236 0 .438.169.48.4l.455 2.506a.488.488 0 00.766.308l2.036-1.47a.488.488 0 01.63.05l2.246 2.246c.17.169.191.436.05.63l-1.47 2.036a.488.488 0 00.308.766l2.505.455a.488.488 0 01.401.48v3.186a.488.488 0 01-.4.48l-2.506.455a.488.488 0 00-.308.766l1.47 2.036a.488.488 0 01-.05.63l-2.246 2.246a.488.488 0 01-.63.05l-2.036-1.47a.488.488 0 00-.766.308l-.455 2.505a.488.488 0 01-.48.401h-3.186a.488.488 0 01-.48-.4l-.455-2.506a.488.488 0 00-.766-.308l-2.036 1.47a.488.488 0 01-.63-.05l-2.246-2.246a.488.488 0 01-.05-.63l1.47-2.036a.488.488 0 00-.308-.766L2.4 13.938a.488.488 0 01-.401-.48v-3.186c0-.236.169-.438.4-.48l2.506-.455a.488.488 0 00.308-.766l-1.47-2.036a.488.488 0 01.05-.63L6.04 3.659a.485.485 0 01.63-.05l2.036 1.47c.291.21.702.045.766-.308l.455-2.505zM12 15.036a3.17 3.17 0 100-6.342 3.17 3.17 0 000 6.342z"
        fill={color || "var(--expo-color-theme-icon-default)"}
      />
    </svg>
  );
}
