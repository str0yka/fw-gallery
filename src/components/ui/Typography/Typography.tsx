import { createElement, forwardRef } from 'react';
import clsx from 'clsx';

import s from './Typography.module.scss';

type TypographyComponent = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'paragraph-big-light'
  | 'paragraph-big-medium'
  | 'paragraph-base-light'
  | 'paragraph-small-light'
  | 'caption-base-bold'
  | 'caption-small-bold';

type TypographyColor = 'primary' | 'secondary';

interface TypographyProps<Component extends TypographyComponent> {
  component?: Component;
  variant?: TypographyVariant;
  color?: TypographyColor;
}

export const Typography = forwardRef(
  <Component extends TypographyComponent = 'p'>(
    {
      component = 'p' as Component,
      variant = 'paragraph-base-light',
      color = 'primary',
      className,
      ...props
    }: TypographyProps<Component> & React.ComponentProps<Component>,
    ref: React.ForwardedRef<React.ComponentRef<Component>>,
  ) =>
    createElement(component, {
      ref,
      className: clsx(s[variant], s[color], className),
      ...props,
    }),
);
