import React from "react";
import { twMerge } from "tailwind-merge";

import { LinkBase, LinkBaseProps } from "./LinkBase";

export function Link({ className, ...rest}: LinkBaseProps) {
  return (
    <LinkBase className={twMerge("text-link transition-opacity hocus:opacity-80", className)} {...rest} />
  )
}