import { forwardRef } from 'react';

import { useAccordionItem } from '../../hooks';

interface AccordionContentProps extends React.ComponentProps<'div'> {}

export const AccordionContent = forwardRef<React.ComponentRef<'div'>, AccordionContentProps>(
  (props, ref) => {
    const accordionItemState = useAccordionItem();

    return accordionItemState.open ? (
      <div
        ref={ref}
        {...props}
      />
    ) : null;
  },
);
