import { createContext } from 'react';

export type AccordionState = {
  value: (string | number)[];
  setValue: React.Dispatch<React.SetStateAction<(string | number)[]>>;
};

export const AccordionContext = createContext<AccordionState>({} as AccordionState);
