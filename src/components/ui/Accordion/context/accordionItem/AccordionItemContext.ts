import { createContext } from 'react';

export interface AccordionItemState {
  value: string | number;
  open: boolean;
}

export const AccordionItemContext = createContext<AccordionItemState>({} as AccordionItemState);
