import { forwardRef } from 'react';
import clsx from 'clsx';

import s from './IconButton.module.scss';

interface IconButtonProps extends React.ComponentProps<'button'> {}

export const IconButton = forwardRef<React.ComponentRef<'button'>, IconButtonProps>(
  ({ className, ...props }, ref) => (
    <button
      ref={ref}
      type="button"
      className={clsx(s.button, className)}
      {...props}
    />
  ),
);
