export const debounce = <Params extends unknown[]>(
  callback: (...args: Params) => unknown,
  delay: number,
) => {
  let timeoutId: ReturnType<typeof setTimeout>;

  return (...args: Params) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(callback, delay, ...args);
  };
};
