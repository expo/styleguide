import React from "react";
import { ButtonBase, ButtonBaseProps } from "./ButtonBase";
import { twMerge } from "tailwind-merge";
import { BuildIcon } from "@expo/styleguide-icons";

export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type ButtonTheme = 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'primary-destructive' | 'secondary-destructive';

type Props = ButtonBaseProps & {
  size?: ButtonSize;
  buttonTheme?: ButtonTheme;
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

export const Button = ({ size = 'sm', buttonTheme = 'primary', disabled }: Props) => {
  return (
    <ButtonBase className={twMerge(
      getButtonSizes(size),
      `inline-flex border rounded-md transition-colors font-medium gap-2 items-center`,
      `border-button-${buttonTheme}`,
      `bg-button-${buttonTheme}`,
      buttonTheme === 'tertiary' || buttonTheme === 'quaternary' ? 'shadow-none' : 'shadow-xs',
      `hover:bg-button-${buttonTheme}-hover`,
      `disabled:bg-button-${buttonTheme}-disabled`,
      `disabled:border-button-${buttonTheme}-disabled`,
      `disabled:text-button-${buttonTheme}-disabled`,
      `disabled:cursor-default`,
      disabled && 'opacity-80',
    )} disabled={disabled}>
      <BuildIcon className={`icon-${size} fill-button-${buttonTheme}-icon stroke-button-${buttonTheme}-icon`} />
      <span className={`flex self-center text-button-${buttonTheme}`}>Button CTA</span>
    </ButtonBase>
  )
}