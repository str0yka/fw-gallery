import { forwardRef, useMemo, useState } from 'react';

import type { AccordionState } from '../../context';
import { AccordionContext } from '../../context';

interface AccordionProviderProps extends React.ComponentProps<'div'> {}

export const AccordionProvider = forwardRef<React.ComponentRef<'div'>, AccordionProviderProps>(
  (props, ref) => {
    const [value, setValue] = useState<AccordionState['value']>([]);

    const providerValue = useMemo(
      () => ({
        value,
        setValue,
      }),
      [value],
    );

    return (
      <AccordionContext.Provider value={providerValue}>
        <div
          ref={ref}
          {...props}
        />
      </AccordionContext.Provider>
    );
  },
);
