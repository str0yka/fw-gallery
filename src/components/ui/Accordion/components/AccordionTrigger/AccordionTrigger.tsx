import { forwardRef } from 'react';
import clsx from 'clsx';

import { MinusIcon, PlusIcon } from '~/components/ui/icons';

import { useAccordion, useAccordionItem } from '../../hooks';

import s from './AccordionTrigger.module.scss';

interface AccordionTriggerProps extends Omit<React.ComponentProps<'button'>, 'value' | 'onClick'> {
  children?: React.ReactNode;
}

export const AccordionTrigger = forwardRef<React.ComponentRef<'button'>, AccordionTriggerProps>(
  ({ children, className, ...props }, ref) => {
    const accordionItemState = useAccordionItem();
    const accordionState = useAccordion();

    const onTriggerClick = () => {
      if (accordionItemState.open) {
        accordionState.setValue((accordionStateValues) =>
          accordionStateValues.filter(
            (accordionStateValue) => accordionStateValue !== accordionItemState.value,
          ),
        );
      } else {
        accordionState.setValue((accordionStateValues) => [
          ...accordionStateValues,
          accordionItemState.value,
        ]);
      }
    };

    return (
      <button
        ref={ref}
        type="button"
        className={clsx(s.trigger, className)}
        onClick={onTriggerClick}
        {...props}
      >
        <p className={s['trigger-text']}>{children}</p>
        {accordionItemState.open ? (
          <MinusIcon className={s['expand-icon']} />
        ) : (
          <PlusIcon className={s['expand-icon']} />
        )}
      </button>
    );
  },
);
