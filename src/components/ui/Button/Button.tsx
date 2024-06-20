import { forwardRef } from 'react';
import clsx from 'clsx';

import s from './Button.module.scss';

interface ButtonProps extends React.ComponentProps<'button'> {}

export const Button = forwardRef<React.ComponentRef<'button'>, ButtonProps>(
  ({ className, ...props }, ref) => (
    <button
      ref={ref}
      type="button"
      className={clsx(s.button, className)}
      {...props}
    />
  ),
);
