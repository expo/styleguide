import React, { cloneElement } from "react";
import { ButtonBase, ButtonBaseProps } from "./ButtonBase";
import { twMerge } from "tailwind-merge";
import type { ReactElement } from 'react';
import { apStyleTitleCase } from 'ap-style-title-case';

import { LinkBase, LinkBaseProps } from "../Link";
import { ArrowUpRightIcon } from "@expo/styleguide-icons";

export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type ButtonTheme = 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'primary-destructive' | 'secondary-destructive';

export type ButtonProps = ButtonBaseProps & LinkBaseProps & {
  size?: ButtonSize;
  theme?: ButtonTheme;
  leftSlot?: ReactElement;
  rightSlot?: ReactElement;
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

function getThemeClasses(theme: ButtonTheme, disabled = false) {
  switch (theme) {
    case "primary": return twMerge(
      "border-button-primary bg-button-primary text-button-primary shadow-xs",
      !disabled && "hocus:bg-button-primary-hover",
      disabled && "bg-button-primary-disabled border-button-primary-disabled text-button-primary-disabled"
    );
    case "primary-destructive": return twMerge(
      "border-button-primary-destructive bg-button-primary-destructive text-button-primary-destructive shadow-xs",
      !disabled && "hocus:bg-button-primary-destructive-hover",
      disabled && "bg-button-primary-destructive-disabled border-button-primary-destructive-disabled text-button-primary-destructive-disabled"
    );
    case "secondary": return twMerge(
      "border-button-secondary bg-button-secondary text-button-secondary shadow-xs",
      !disabled && "hocus:bg-button-secondary-hover",
      disabled && "bg-button-secondary-disabled border-button-secondary-disabled text-button-secondary-disabled"
    );
    case "secondary-destructive": return twMerge(
      "border-button-secondary-destructive bg-button-secondary-destructive text-button-secondary-destructive shadow-xs",
      !disabled && "hocus:bg-button-secondary-destructive-hover",
      disabled && "bg-button-secondary-destructive-disabled border-button-secondary-destructive-disabled text-button-secondary-destructive-disabled"
    );
    case "tertiary": return twMerge(
      "border-button-tertiary bg-button-tertiary text-button-tertiary shadow-none",
      !disabled && "hocus:bg-button-tertiary-hover",
      disabled && "bg-button-tertiary-disabled border-button-tertiary-disabled text-button-tertiary-disabled"
    );
    case "quaternary": return twMerge(
      "border-button-quaternary bg-button-quaternary text-button-quaternary shadow-none",
      !disabled && "hocus:bg-button-quaternary-hover",
      disabled && "bg-button-quaternary-disabled border-button-quaternary-disabled text-button-quaternary-disabled"
    );
  }
}

function getIconSizeClasses(size: ButtonSize) {
  switch (size) {
    case "xs": return "icon-xs";
    case "sm": return "icon-sm";
    case "md": return "icon-md";
    case "lg": return "icon-md";
    case "xl": return "icon-lg";
    case "2xl": return "icon-lg";
  }
}

function getThemedIconClasses(theme: ButtonTheme) {
  switch (theme) {
    case "primary": return "text-button-primary-icon";
    case "primary-destructive": return "text-button-primary-destructive-icon";
    case "secondary": return "text-button-secondary-icon";
    case "secondary-destructive": return "text-button-secondary-destructive-icon";
    case "tertiary": return "text-button-tertiary-icon";
    case "quaternary": return "text-button-quaternary-icon";
  }
}

function isIconElement(element: ReactElement) {
  if (React.isValidElement(element)) {
    // @ts-ignore React Portal did not have `displayName` prop, but it is a valid element
    return element.type?.displayName?.endsWith("Icon") ?? false;
  }
  return false;
}

function getIconProps(element: ReactElement, classNames: string) {
  return { ...element.props, className: twMerge(classNames, element.props.className) }
}

export const Button = (props: ButtonProps) => {
  const { children, size = 'sm', theme = 'primary', href, disabled, className, leftSlot, rightSlot, openInNewTab, ...rest } = props;

  const Element = href ? LinkBase : ButtonBase;

  const isLeftSlotIcon = leftSlot && isIconElement(leftSlot);
  const isRightSlotIcon = rightSlot && isIconElement(rightSlot);
  const iconClasses = (isLeftSlotIcon || isRightSlotIcon) && twMerge(`${getIconSizeClasses(size)}`, getThemedIconClasses(theme), disabled && 'opacity-60');

  return (
    <Element
      href={href}
      className={twMerge(
        `inline-flex border rounded-md font-medium gap-2 items-center whitespace-nowrap transition`,
        getSizeClasses(size),
        getThemeClasses(theme, disabled),
        disabled && 'cursor-default opacity-80 pointer-event-none',
        className,
      )}
      disabled={disabled}
      {...(href ? { openInNewTab } : {})}
      {...rest}
    >
      {isLeftSlotIcon ? cloneElement(leftSlot, getIconProps(leftSlot, iconClasses)) : leftSlot}
      {children && (
        <span className={twMerge(
          "flex self-center text-inherit leading-none",
          href && "select-none"
        )}>{typeof children === 'string' ? apStyleTitleCase(children) : children}</span>
      )}
      {isRightSlotIcon ? cloneElement(rightSlot, getIconProps(rightSlot, iconClasses)) : rightSlot}
      {!leftSlot && !rightSlot && href && openInNewTab && (
        <ArrowUpRightIcon className={twMerge(getIconSizeClasses(size), 'text-icon-secondary')} />
      )}
    </Element>
  )
}