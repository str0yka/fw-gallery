import { useEffect } from 'react';

export const useDebounce = (callback: () => void, deps: unknown[], delay: number = 1000) => {
  useEffect(() => {
    const timeoutId = setTimeout(callback, delay);
    return () => {
      clearTimeout(timeoutId);
    };
  }, deps);
};
