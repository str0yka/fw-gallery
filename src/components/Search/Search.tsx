import { forwardRef } from 'react';

import { Input } from '~/components/ui';
import { SearchIcon } from '~/components/ui/icons';

interface SearchProps extends Omit<React.ComponentProps<typeof Input>, 'startAdornment'> {}

export const Search = forwardRef<React.ComponentRef<typeof Input>, SearchProps>((props, ref) => (
  <Input
    ref={ref}
    startAdornment={<SearchIcon />}
    {...props}
  />
));
