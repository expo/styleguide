import * as StyleguideIcons from "@expo/styleguide-icons";
import React from 'react';
import { twMerge } from "tailwind-merge";

export type IconNames = keyof typeof StyleguideIcons;

export type IconProps = {
  name: IconNames;
  className?: string;
};

export function Icon({ name, className, ...rest }: IconProps) {
  if (StyleguideIcons[name]) {
    const _Icon = StyleguideIcons[name];
    return <_Icon className={twMerge("icon-md text-icon-default", className)} {...rest} />;
  }
  return null;
}