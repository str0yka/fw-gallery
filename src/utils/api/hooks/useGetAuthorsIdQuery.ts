import { useQuery } from '@tanstack/react-query';

import type { GetAuthorsIdRequestConfig } from '../requests';
import { getAuthorsId } from '../requests';

type UseGetAuthorsIdQueryParams = QuerySettings<GetAuthorsIdRequestConfig, typeof getAuthorsId>;

export const useGetAuthorsIdQuery = ({ params, config, options }: UseGetAuthorsIdQueryParams) =>
  useQuery({
    queryKey: ['getAuthorsId', params.id],
    ...options,
    queryFn: () => getAuthorsId({ params, config }),
  });
