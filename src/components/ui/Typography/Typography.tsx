import { createElement } from 'react';
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

interface TypographyProps<Component extends TypographyComponent> {
  component?: Component;
  variant?: TypographyVariant;
}

export const Typography = <Component extends TypographyComponent = 'p'>({
  component = 'p' as Component,
  variant = 'paragraph-base-light',
  className,
  ...props
}: TypographyProps<Component> & React.ComponentPropsWithoutRef<Component>) =>
  createElement(component, {
    className: clsx(s[variant], className),
    ...props,
  });
