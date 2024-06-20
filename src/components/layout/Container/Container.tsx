import { createElement, forwardRef } from 'react';
import clsx from 'clsx';

import s from './Container.module.scss';

type ContainerComponent = 'div' | 'header' | 'main' | 'footer';

interface ContainerProps<Component extends ContainerComponent> {
  component?: Component;
  children?: React.ReactNode;
}

export const Container = forwardRef(
  <Component extends ContainerComponent = 'div'>(
    {
      component = 'div' as Component,
      className,
      ...props
    }: ContainerProps<Component> & React.ComponentProps<Component>,
    ref: React.ForwardedRef<React.ComponentRef<Component>>,
  ) =>
    createElement(component, {
      ref,
      className: clsx(s.container, className),
      ...props,
    }),
);
