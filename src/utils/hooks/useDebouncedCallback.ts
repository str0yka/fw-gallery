import { useMemo } from 'react';

import { debounce } from '../helpers';

export const useDebounceCallback = <Params extends unknown[], Return>(
  callback: (...args: Params) => Return,
  delay: number,
) => {
  const debounced = useMemo(() => debounce(callback, delay), [delay]);

  return debounced;
};
