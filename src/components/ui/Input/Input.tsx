import { forwardRef, useId } from 'react';
import clsx from 'clsx';

import s from './Input.module.scss';

interface InputProps extends React.ComponentProps<'input'> {
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
}

export const Input = forwardRef<React.ComponentRef<'input'>, InputProps>(
  ({ startAdornment, endAdornment, className, id: externalId, ...props }, ref) => {
    const internalId = useId();

    const id = externalId ?? internalId;

    return (
      <label
        htmlFor={id}
        className={s.wrapper}
      >
        {startAdornment}
        <input
          ref={ref}
          id={id}
          className={clsx(s.input, className)}
          size={1}
          {...props}
        />
        {endAdornment}
      </label>
    );
  },
);
