import { useQuery } from '@tanstack/react-query';

import type { GetAuthorsRequestConfig } from '../requests';
import { getAuthors } from '../requests';

type UseGetAuthorsQueryParams = QuerySettings<GetAuthorsRequestConfig, typeof getAuthors>;

export const useGetAuthorsQuery = ({ config, options }: UseGetAuthorsQueryParams = {}) =>
  useQuery({
    queryKey: ['getAuthors'],
    ...options,
    queryFn: () => getAuthors({ config }),
  });
