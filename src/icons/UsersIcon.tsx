import React from "react";
import { IconProps } from "../../types";
export default function UsersIcon(props: IconProps) {
  const { title = "Users-icon", size, color, width, height, titleId } = props;
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
        d="M6.104 5.997c.905-.92 2.171-1.431 3.76-1.431 1.588 0 2.854.512 3.759 1.431.886.901 1.334 2.1 1.49 3.324.245 1.904-.186 4.065-1.037 5.83a7.295 7.295 0 012.58 1.41c1.135.958 2.07 2.35 2.067 3.9a1 1 0 01-1 .998H2a1 1 0 01-1-1c0-1.547.933-2.94 2.068-3.898a7.288 7.288 0 012.579-1.41c-.85-1.765-1.28-3.926-1.035-5.83.157-1.225.605-2.423 1.492-3.324zm.491 3.579c-.243 1.893.39 4.23 1.464 5.757a1 1 0 01-.818 1.576c-.922 0-2.012.444-2.882 1.18-.508.428-.881.903-1.107 1.37h13.22c-.225-.467-.598-.941-1.106-1.37-.871-.735-1.962-1.18-2.884-1.18a1 1 0 01-.818-1.576c1.075-1.527 1.708-3.864 1.466-5.758-.12-.931-.44-1.674-.933-2.175-.475-.483-1.2-.834-2.333-.834-1.135 0-1.86.351-2.335.834-.493.502-.814 1.244-.934 2.176z"
        fill={color || "var(--expo-color-theme-icon-default)"}
      />
      <path
        d="M14.085 2.5c-1.588 0-2.855.512-3.76 1.431-.59.6-.987 1.334-1.232 2.119.243-.033.5-.05.77-.05.489 0 .93.055 1.327.159a2.95 2.95 0 01.561-.825c.475-.483 1.2-.834 2.334-.834 1.134 0 1.859.351 2.334.834.493.501.813 1.244.932 2.176.243 1.893-.39 4.23-1.465 5.757a1 1 0 00.818 1.576c.922 0 2.012.445 2.884 1.18.508.429.881.904 1.106 1.37h-5.158c.77.536 1.419 1.236 1.805 2h4.604a1 1 0 001-.997c.002-1.55-.932-2.943-2.067-3.901a7.293 7.293 0 00-2.58-1.41c.85-1.765 1.281-3.926 1.037-5.83-.157-1.224-.605-2.423-1.49-3.324-.905-.92-2.172-1.431-3.76-1.431zM5.614 16.65a4.788 4.788 0 011.627-.308 8.375 8.375 0 01-.671-1.145 5.813 5.813 0 00-.956 1.452z"
        fill={color || "var(--expo-color-theme-icon-default)"}
      />
    </svg>
  );
}
