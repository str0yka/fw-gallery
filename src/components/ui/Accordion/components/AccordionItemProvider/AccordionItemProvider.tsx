import { useMemo } from 'react';

import type { AccordionItemState } from '../../context';
import { AccordionItemContext } from '../../context';
import { useAccordion } from '../../hooks';

interface AccordionItemProviderProps {
  value: AccordionItemState['value'];
  children?: React.ReactNode;
}

export const AccordionItemProvider: React.FC<AccordionItemProviderProps> = ({
  value,
  children,
}) => {
  const accordionState = useAccordion();

  const open = accordionState.value.some((accordionStateValue) => accordionStateValue === value);

  const providerValue = useMemo(() => ({ value, open }), [value, open]);

  return (
    <AccordionItemContext.Provider value={providerValue}>{children}</AccordionItemContext.Provider>
  );
};
