import { useEffect, useRef } from 'react';

type UseOnClickOutside = {
  <Target extends Element>(ref: React.RefObject<Target>, callback: (event: Event) => void): void;
  <Target extends Element>(callback: (event: Event) => void, ref?: never): React.RefObject<Target>;
};

export const useOnClickOutside = ((...params) => {
  const target = params[0] instanceof Function ? undefined : params[0];
  const callback = params[0] instanceof Function ? params[0] : params[1];

  const targetRef: NonNullable<typeof target> = useRef(null);
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const onDocumentClick = (event: Event) => {
      const element = target?.current ?? targetRef.current;

      if (element && !element.contains(event.target as Node)) {
        callbackRef?.current?.(event);
      }
    };

    document.addEventListener('mousedown', onDocumentClick);
    document.addEventListener('touchstart', onDocumentClick);

    return () => {
      document.removeEventListener('mousedown', onDocumentClick);
      document.removeEventListener('touchstart', onDocumentClick);
    };
  }, []);

  if (target) return;
  return targetRef;
}) as UseOnClickOutside;
