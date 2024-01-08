import React, { cloneElement, ForwardedRef, forwardRef } from 'react';
import type { ReactElement } from 'react';

import { ButtonBase, ButtonBaseProps } from './ButtonBase';
import { titleCase } from './helpers';
import { mergeClasses } from '../../helpers/mergeClasses';
import { LinkBase, LinkBaseProps } from '../Link';

export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type ButtonTheme =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'quaternary'
  | 'primary-destructive'
  | 'secondary-destructive';

export type ButtonProps = ButtonBaseProps &
  LinkBaseProps & {
    size?: ButtonSize;
    theme?: ButtonTheme;
    leftSlot?: ReactElement;
    rightSlot?: ReactElement;
    skipCapitalization?: boolean;
  };

function getSizeClasses(size: ButtonSize) {
  switch (size) {
    case 'xs':
      return 'h-8 px-3 text-3xs';
    case 'sm':
      return 'h-9 px-4 text-xs';
    case 'md':
      return 'h-10 px-4 text-xs';
    case 'lg':
      return 'h-11 px-6 text-base';
    case 'xl':
      return 'h-12 px-6 text-base';
    case '2xl':
      return 'h-15 px-6 text-lg';
  }
}

function getThemeClasses(theme: ButtonTheme, disabled = false) {
  switch (theme) {
    case 'primary':
      return mergeClasses(
        'border-button-primary bg-button-primary text-button-primary shadow-xs',
        !disabled && 'hocus:bg-button-primary-hover active:scale-98',
        disabled && 'bg-button-primary-disabled border-button-primary-disabled text-button-primary-disabled'
      );
    case 'primary-destructive':
      return mergeClasses(
        'border-button-primary-destructive bg-button-primary-destructive text-button-primary-destructive shadow-xs',
        !disabled && 'hocus:bg-button-primary-destructive-hover active:scale-98',
        disabled &&
          'bg-button-primary-destructive-disabled border-button-primary-destructive-disabled text-button-primary-destructive-disabled'
      );
    case 'secondary':
      return mergeClasses(
        'border-button-secondary bg-button-secondary text-button-secondary shadow-xs',
        !disabled && 'hocus:bg-button-secondary-hover active:scale-98',
        disabled && 'bg-button-secondary-disabled border-button-secondary-disabled text-button-secondary-disabled'
      );
    case 'secondary-destructive':
      return mergeClasses(
        'border-button-secondary-destructive bg-button-secondary-destructive text-button-secondary-destructive shadow-xs',
        !disabled && 'hocus:bg-button-secondary-destructive-hover active:scale-98',
        disabled &&
          'bg-button-secondary-destructive-disabled border-button-secondary-destructive-disabled text-button-secondary-destructive-disabled'
      );
    case 'tertiary':
      return mergeClasses(
        'border-button-tertiary bg-button-tertiary text-button-tertiary shadow-none',
        !disabled && 'hocus:bg-button-tertiary-hover active:scale-98',
        disabled && 'bg-button-tertiary-disabled border-button-tertiary-disabled text-button-tertiary-disabled'
      );
    case 'quaternary':
      return mergeClasses(
        'border-button-quaternary bg-button-quaternary text-button-quaternary shadow-none',
        !disabled && 'hocus:bg-button-quaternary-hover active:scale-98',
        disabled && 'bg-button-quaternary-disabled border-button-quaternary-disabled text-button-quaternary-disabled'
      );
  }
}

function getIconSizeClasses(size: ButtonSize) {
  switch (size) {
    case 'xs':
      return 'icon-xs';
    case 'sm':
      return 'icon-sm';
    case 'md':
      return 'icon-md';
    case 'lg':
      return 'icon-md';
    case 'xl':
      return 'icon-lg';
    case '2xl':
      return 'icon-lg';
  }
}

function getThemedIconClasses(theme: ButtonTheme) {
  switch (theme) {
    case 'primary':
      return 'text-button-primary-icon';
    case 'primary-destructive':
      return 'text-button-primary-destructive-icon';
    case 'secondary':
      return 'text-button-secondary-icon';
    case 'secondary-destructive':
      return 'text-button-secondary-destructive-icon';
    case 'tertiary':
      return 'text-button-tertiary-icon';
    case 'quaternary':
      return 'text-button-quaternary-icon';
  }
}

function getButtonIconClasses(size: ButtonSize) {
  switch (size) {
    case 'xs':
      return 'px-0 w-8 justify-center items-center';
    case 'sm':
      return 'px-0 w-9 justify-center items-center';
    case 'md':
      return 'px-0 w-10 justify-center items-center';
    case 'lg':
      return 'px-0 w-11 justify-center items-center';
    case 'xl':
      return 'px-0 w-12 justify-center items-center';
    case '2xl':
      return 'px-0 w-15 justify-center items-center';
  }
}

function isIconElement(element: ReactElement) {
  if (React.isValidElement(element)) {
    // @ts-ignore React Portal did not have `displayName` prop, but it is a valid element
    return element.type?.displayName?.endsWith('Icon') ?? false;
  }
  return false;
}

function getIconProps(element: ReactElement, classNames: string) {
  return {
    ...element.props,
    className: mergeClasses(classNames, element.props.className),
  };
}

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      children,
      size = 'sm',
      theme = 'primary',
      skipCapitalization = false,
      href,
      disabled,
      className,
      leftSlot,
      rightSlot,
      openInNewTab,
      ...rest
    },
    ref
  ) => {
    const isLeftSlotIcon = leftSlot && isIconElement(leftSlot);
    const isRightSlotIcon = rightSlot && isIconElement(rightSlot);
    const iconClasses =
      (isLeftSlotIcon || isRightSlotIcon) &&
      mergeClasses(getIconSizeClasses(size), getThemedIconClasses(theme), disabled && 'opacity-60');
    const isSingleIconButton = (leftSlot || rightSlot) && !children;

    const twClasses = mergeClasses(
      `inline-flex border border-solid rounded-md font-medium gap-2 items-center whitespace-nowrap transition`,
      getSizeClasses(size),
      getThemeClasses(theme, disabled),
      isSingleIconButton && getButtonIconClasses(size),
      disabled && 'cursor-default opacity-80 pointer-event-none',
      className
    );

    const content = (
      <>
        {isLeftSlotIcon ? cloneElement(leftSlot, getIconProps(leftSlot, iconClasses)) : leftSlot}
        {children && (
          <span className={mergeClasses('flex self-center text-inherit leading-none', href && 'select-none')}>
            {typeof children === 'string' && !skipCapitalization ? titleCase(children) : children}
          </span>
        )}
        {isRightSlotIcon ? cloneElement(rightSlot, getIconProps(rightSlot, iconClasses)) : rightSlot}
      </>
    );

    if (href) {
      return (
        <LinkBase
          href={href}
          className={twClasses}
          disabled={disabled}
          ref={ref as ForwardedRef<HTMLAnchorElement>}
          openInNewTab={openInNewTab}
          {...rest}>
          {content}
        </LinkBase>
      );
    } else {
      return (
        <ButtonBase className={twClasses} disabled={disabled} ref={ref as ForwardedRef<HTMLButtonElement>} {...rest}>
          {content}
        </ButtonBase>
      );
    }
  }
);

Button.displayName = 'Button';
