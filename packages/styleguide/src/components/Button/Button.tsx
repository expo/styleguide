import React from "react";
import { ButtonBase, ButtonBaseProps } from "./ButtonBase";
import { twMerge } from "tailwind-merge";

export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type ButtonTheme = 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'primary-destructive' | 'secondary-destructive';

type Props = ButtonBaseProps & {
  size?: ButtonSize;
  buttonTheme?: ButtonTheme;
};

export function getButtonSizes(size: ButtonSize) {
  switch (size) {
    case "xs": return "h-8 p-3";
    case "sm": return "h-9 p-4";
    case "md": return "h-10 p-4";
    case "lg": return "h-11 p-6";
    case "xl": return "h-12 p-6";
    case "2xl": return "h-16 p-6";
  }
}

export const Button = ({ size = 'sm', buttonTheme = 'primary', disabled }: Props) => {
  return (
    <ButtonBase className={twMerge(
      getButtonSizes(size),
      `border rounded-md transition-colors`,
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
      <span className={`flex self-center text-button-${buttonTheme}`}>Button CTA</span>
    </ButtonBase>
  )
}