import { useState } from 'react';

import { Header, ReduxProvider, TanstackQueryProvider } from '~/components';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Select,
} from './components/ui';

const OPTIONS = [
  { label: 'Louvre Museum', value: 1 },
  { label: 'Van Gogh Museum', value: 2 },
  { label: 'State Tretyakov Gallery', value: 3 },
  { label: 'Thyssen-Bornemisza National Museum', value: 4 },
  { label: 'New York Historical Society Museum', value: 5 },
  { label: 'Louvre Museum', value: 6 },
  { label: 'Van Gogh Museum', value: 7 },
  { label: 'State Tretyakov Gallery', value: 8 },
  { label: 'Thyssen-Bornemisza National Museum', value: 9 },
  { label: 'New York Historical Society Museum', value: 10 },
];

export const App = () => {
  const [value, setValue] = useState<null | number>(null);

  return (
    <TanstackQueryProvider>
      <ReduxProvider>
        <Header />
        <div style={{ marginTop: '150px', width: '336px' }}>
          <Accordion>
            <AccordionItem value="select">
              <AccordionTrigger>Select</AccordionTrigger>
              <AccordionContent>
                <Select
                  placeholder="Select the location"
                  value={value}
                  options={OPTIONS}
                  onSelect={(value) => setValue(value as number)}
                />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="select2">
              <AccordionTrigger>Select</AccordionTrigger>
              <AccordionContent>
                <Select
                  placeholder="Select the location"
                  value={value}
                  options={OPTIONS}
                  onSelect={(value) => setValue(value as number)}
                />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </ReduxProvider>
    </TanstackQueryProvider>
  );
};
