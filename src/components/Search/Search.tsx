import { forwardRef, useState } from 'react';

import { Input } from '~/components/ui';
import { SearchIcon } from '~/components/ui/icons';

interface SearchProps
  extends Omit<React.ComponentProps<typeof Input>, 'value' | 'onChange' | 'startAdornment'> {
  onQueryChange: (query: string) => void;
}

export const Search = forwardRef<React.ComponentRef<typeof Input>, SearchProps>(
  ({ onQueryChange, ...props }, ref) => {
    const [query, setQuery] = useState('');

    return (
      <Input
        ref={ref}
        startAdornment={<SearchIcon />}
        value={query}
        onChange={(event) => {
          setQuery(event.target.value);
          onQueryChange(event.target.value);
        }}
        {...props}
      />
    );
  },
);
