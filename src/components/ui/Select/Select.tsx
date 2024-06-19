import { forwardRef } from 'react';
import clsx from 'clsx';

import { ExpandIcon } from '../icons';
import { Input } from '../Input/Input';
import { Typography } from '../Typography/Typography';

import { useSelect } from './hooks/useSelect';

import s from './Select.module.scss';

interface SelectProps extends Omit<React.ComponentProps<typeof Input>, 'value' | 'onSelect'> {
  value?: Option['value'];
  options?: Option[];
  onSelect?: (value: Option['value']) => void;
  filter?: (option: Option, value: string) => boolean;
}

export const Select = forwardRef<React.ComponentRef<typeof Input>, SelectProps>(
  ({ value, onSelect, options = [], filter, ...props }, ref) => {
    const { state, functions, refs } = useSelect({
      options,
      filter,
      onSelect,
      value,
    });

    return (
      <div
        ref={refs.wrapperRef}
        className={s.wrapper}
      >
        <Input
          {...props}
          ref={ref}
          endAdornment={<ExpandIcon className={clsx(s['expand-icon'], { [s.open]: state.open })} />}
          value={state.inputValue}
          onFocus={functions.onInputFocus}
          onChange={functions.onInputChange}
          onKeyDown={functions.onInputKeyDown}
        />
        {state.open && (
          <ul
            ref={refs.listRef}
            className={s.list}
          >
            {!state.filteredOptions.length && (
              <Typography
                variant="paragraph-base-light"
                className={s['list-empty-message']}
              >
                There are no matching results for your query.
              </Typography>
            )}
            {!!state.filteredOptions.length &&
              state.filteredOptions.map((option) => (
                <li
                  key={option.value}
                  className={clsx(s['list-item'], {
                    [s.selected]: functions.isOptionSelected(option),
                    [s.active]: functions.isOptionActive(option),
                  })}
                  onClick={functions.onOptionClick(option)}
                  aria-hidden
                >
                  <Typography variant="paragraph-base-light">{option.label}</Typography>
                </li>
              ))}
          </ul>
        )}
      </div>
    );
  },
);
