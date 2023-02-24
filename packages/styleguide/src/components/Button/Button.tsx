import React from "react";
import { ButtonBase, ButtonBaseProps } from "./ButtonBase";
import { twMerge } from "tailwind-merge";

import { Icon } from "../Icon";

export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type ButtonTheme = 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'primary-destructive' | 'secondary-destructive';

export type ButtonProps = ButtonBaseProps & {
  size?: ButtonSize;
  theme?: ButtonTheme;
};

export function getButtonSizes(size: ButtonSize) {
  switch (size) {
    case "xs": return "h-8 px-3 text-3xs";
    case "sm": return "h-9 px-4 text-xs";
    case "md": return "h-10 px-4 text-xs";
    case "lg": return "h-11 px-6 text-base";
    case "xl": return "h-12 px-6 text-base";
    case "2xl": return "h-15 px-6 text-lg";
  }
}

export const Button = ({ children, size = 'sm', theme = 'primary', disabled }: ButtonProps) => {
  return (
    <ButtonBase className={twMerge(
      getButtonSizes(size),
      `inline-flex border rounded-md transition-colors font-medium gap-2 items-center`,
      `border-button-${theme}`,
      `bg-button-${theme}`,
      `text-button-${theme}`,
      theme === 'tertiary' || theme === 'quaternary' ? 'shadow-none' : 'shadow-xs',
      `hover:bg-button-${theme}-hover`,
      `disabled:bg-button-${theme}-disabled`,
      `disabled:border-button-${theme}-disabled`,
      `disabled:text-button-${theme}-disabled`,
      `disabled:cursor-default`,
      disabled && 'opacity-80',
    )} disabled={disabled}>
      <Icon name="Earth01Icon" className={`icon-${size} text-button-${theme}-icon`} />
      <span className={`flex self-center text-button-${theme}`}>{children}</span>
    </ButtonBase>
  )
}