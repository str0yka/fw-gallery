import { useContext } from 'react';

import { AccordionItemContext } from '../context';

export const useAccordionItem = () => useContext(AccordionItemContext);
