import { useState } from 'react';

import { useDebounce } from './useDebounce';

export const useDebouncedValue = <Value>(value: Value, delay: number = 1000) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useDebounce(() => setDebouncedValue(value), [value, delay], delay);

  return debouncedValue;
};
