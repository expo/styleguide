import React from "react";
import { ButtonBase, ButtonBaseProps } from "./ButtonBase";
import { twMerge } from "tailwind-merge";

import { Icon, IconNames } from "../Icon";

export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type ButtonTheme = 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'primary-destructive' | 'secondary-destructive';

export type ButtonProps = ButtonBaseProps & {
  size?: ButtonSize;
  theme?: ButtonTheme;
  icon?: IconNames;
};

function getSizeClasses(size: ButtonSize) {
  switch (size) {
    case "xs": return "h-8 px-3 text-3xs";
    case "sm": return "h-9 px-4 text-xs";
    case "md": return "h-10 px-4 text-xs";
    case "lg": return "h-11 px-6 text-base";
    case "xl": return "h-12 px-6 text-base";
    case "2xl": return "h-15 px-6 text-lg";
  }
}

function getThemeClasses(theme: ButtonTheme) {
  switch (theme) {
    case "primary": return twMerge(
      "border-button-primary bg-button-primary text-button-primary shadow-xs",
      "hover:bg-button-primary-hover",
      "disabled:bg-button-primary-disabled disabled:border-button-primary-disabled disabled:text-button-primary-disabled"
    );
    case "primary-destructive": return twMerge(
      "border-button-primary-destructive bg-button-primary-destructive text-button-primary-destructive shadow-xs",
      "hover:bg-button-primary-destructive-hover",
      "disabled:bg-button-primary-destructive-disabled disabled:border-button-primary-destructive-disabled disabled:text-button-primary-destructive-disabled"
    );
    case "secondary": return twMerge(
      "border-button-secondary bg-button-secondary text-button-secondary shadow-xs",
      "hover:bg-button-secondary-hover",
      "disabled:bg-button-secondary-disabled disabled:border-button-secondary-disabled disabled:text-button-secondary-disabled"
    );
    case "secondary-destructive": return twMerge(
      "border-button-secondary-destructive bg-button-secondary-destructive text-button-secondary-destructive shadow-xs",
      "hover:bg-button-secondary-destructive-hover",
      "disabled:bg-button-secondary-destructive-disabled disabled:border-button-secondary-destructive-disabled disabled:text-button-secondary-destructive-disabled"
    );
    case "tertiary": return twMerge(
      "border-button-tertiary bg-button-tertiary text-button-tertiary shadow-none",
      "hover:bg-button-tertiary-hover",
      "disabled:bg-button-tertiary-disabled disabled:border-button-tertiary-disabled disabled:text-button-tertiary-disabled"
    );
    case "quaternary": return twMerge(
      "border-button-quaternary bg-button-quaternary text-button-quaternary shadow-none",
      "hover:bg-button-quaternary-hover",
      "disabled:bg-button-quaternary-disabled disabled:border-button-quaternary-disabled disabled:text-button-quaternary-disabled"
    );
  }
}

function getThemeIconClasses(theme: ButtonTheme) {
  switch (theme) {
    case "primary": return "text-button-primary-icon";
    case "primary-destructive": return "text-button-primary-destructive-icon";
    case "secondary": return "text-button-secondary-icon";
    case "secondary-destructive": return "text-button-secondary-destructive-icon";
    case "tertiary": return "text-button-tertiary-icon";
    case "quaternary": return "text-button-quaternary-icon";
  }
}

export const Button = (props: ButtonProps) => {
  const { children, size = 'sm', theme = 'primary', disabled, className, icon, ...rest } = props;
  return (
    <ButtonBase className={twMerge(
      `inline-flex border rounded-md transition-colors font-medium gap-2 items-center`,
      getSizeClasses(size),
      getThemeClasses(theme),
      `disabled:cursor-default disabled:opacity-80`,
      className,
    )} disabled={disabled} {...rest}>
      {icon && <Icon name={icon} className={twMerge(`icon-${size}`, getThemeIconClasses(theme))} />}
      {children && <span className="flex self-center text-inherit">{children}</span>}
    </ButtonBase>
  )
}