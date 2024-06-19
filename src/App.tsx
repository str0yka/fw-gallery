import { useState } from 'react';

import { Header, ReduxProvider, TanstackQueryProvider } from '~/components';

import { Select } from './components/ui';

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
  const [value, setValue] = useState(1);

  console.log(value);

  return (
    <TanstackQueryProvider>
      <ReduxProvider>
        <Header />
        <div style={{ marginTop: '150px', width: '336px' }}>
          <Select
            value={value}
            options={OPTIONS}
            onSelect={(value) => setValue(value)}
          />
        </div>
      </ReduxProvider>
    </TanstackQueryProvider>
  );
};
