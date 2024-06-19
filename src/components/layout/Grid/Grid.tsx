import { createElement, forwardRef } from 'react';
import clsx from 'clsx';

import s from './Grid.module.scss';

type GridComponent = 'div' | 'header' | 'main' | 'footer';

interface GridProps<Component extends GridComponent> {
  component?: Component;
  children?: React.ReactNode;
}

export const Grid = forwardRef(
  <Component extends GridComponent = 'div'>(
    {
      component = 'div' as Component,
      className,
      ...props
    }: GridProps<Component> & React.ComponentProps<Component>,
    ref: React.ForwardedRef<React.ComponentRef<Component>>,
  ) =>
    createElement(component, {
      ref,
      className: clsx(s.grid, className),
      ...props,
    }),
);
