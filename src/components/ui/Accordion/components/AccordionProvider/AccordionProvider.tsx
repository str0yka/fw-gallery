import { useMemo, useState } from 'react';

import type { AccordionState } from '../../context';
import { AccordionContext } from '../../context';

interface AccordionProviderProps {
  children?: React.ReactNode;
}

export const AccordionProvider: React.FC<AccordionProviderProps> = ({ children }) => {
  const [value, setValue] = useState<AccordionState['value']>([]);

  const providerValue = useMemo(
    () => ({
      value,
      setValue,
    }),
    [value],
  );

  return <AccordionContext.Provider value={providerValue}>{children}</AccordionContext.Provider>;
};
