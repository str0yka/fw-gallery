type SearchParams = Record<string, unknown>;

export function toURLSearchParams(input: SearchParams) {
  const filteredInput = Object.fromEntries(
    Object.entries({ ...input })
      .filter(([, value]) => value !== undefined && value !== '' && value !== null)
      .filter(([, value]) => {
        if (value && typeof value === 'object') {
          return Object.entries(value).length !== 0;
        }
        return true;
      })
      .map(([key, value]) => [key, typeof value === 'string' ? value : JSON.stringify(value)]),
  );

  return new URLSearchParams(filteredInput);
}
