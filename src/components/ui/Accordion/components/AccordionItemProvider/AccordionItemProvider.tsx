import { forwardRef, useMemo } from 'react';

import type { AccordionItemState } from '../../context';
import { AccordionItemContext } from '../../context';
import { useAccordion } from '../../hooks';

interface AccordionItemProviderProps extends React.ComponentProps<'div'> {
  value: AccordionItemState['value'];
}

export const AccordionItemProvider = forwardRef<
  React.ComponentRef<'div'>,
  AccordionItemProviderProps
>(({ value, ...props }, ref) => {
  const accordionState = useAccordion();

  const open = accordionState.value.some((accordionStateValue) => accordionStateValue === value);

  const providerValue = useMemo(() => ({ value, open }), [value, open]);

  return (
    <AccordionItemContext.Provider value={providerValue}>
      <div
        ref={ref}
        {...props}
      />
    </AccordionItemContext.Provider>
  );
});
