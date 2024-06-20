import { useContext } from 'react';

import { AccordionContext } from '../context';

export const useAccordion = () => useContext(AccordionContext);
