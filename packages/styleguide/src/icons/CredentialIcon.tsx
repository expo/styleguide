import React from "react";
import { IconProps } from "../types";
export function CredentialIcon(props: IconProps) {
  const {
    title = "Credential-icon",
    size,
    color,
    width,
    height,
    titleId,
  } = props;
  return (
    <svg
      viewBox="0 0 20 21"
      fill="none"
      width={size || width || "20px"}
      height={size || height || "20px"}
      role="img"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M11.327 11.426h.75V9.88l-1.214.957.464.59zm-6.187 0l.465-.589L4.39 9.88v1.546h.75zm0 7.514h-.75v1.391l1.163-.765-.413-.626zm1.563-1.029l.409-.629-.411-.267-.41.27.412.626zm1.585 1.029l-.408.629.451.293.422-.333-.465-.59zm1.303-1.029l.382-.645-.443-.262-.404.319.465.588zm1.736 1.029l-.382.645 1.132.67V18.94h-.75zm-.464-8.103c-.724.57-1.636.91-2.63.91v1.5c1.343 0 2.58-.46 3.558-1.232l-.928-1.178zm-2.63.91c-.993 0-1.905-.34-2.628-.91l-.929 1.178a5.729 5.729 0 003.558 1.233v-1.5zM5.89 18.94v-7.514h-1.5v7.514h1.5zm.401-1.655l-1.563 1.028.825 1.253 1.563-1.028-.825-1.253zm2.406 1.026l-1.585-1.029-.817 1.259 1.585 1.028.817-1.258zm.429-.988L7.824 18.35l.93 1.178 1.301-1.029-.93-1.177zm2.583.972l-1.736-1.029-.765 1.29 1.737 1.03.764-1.291zm-1.132-6.869v7.514h1.5v-7.514h-1.5z"
        fill={color || "var(--expo-theme-icon-default)"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 2.25h16a.25.25 0 01.25.25v11.474a.25.25 0 01-.25.25h-6.673v1.75H18a2 2 0 002-2V2.5a2 2 0 00-2-2H2a2 2 0 00-2 2v11.474a2 2 0 002 2h3.14v-1.75H2a.25.25 0 01-.25-.25V2.5A.25.25 0 012 2.25z"
        fill={color || "var(--expo-theme-icon-default)"}
      />
      <circle
        cx={8.234}
        cy={8.292}
        r={4}
        stroke={color || "var(--expo-theme-icon-default)"}
        strokeWidth={2}
      />
    </svg>
  );
}
