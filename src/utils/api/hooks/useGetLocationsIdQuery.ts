import { useQuery } from '@tanstack/react-query';

import type { GetLocationsIdRequestConfig } from '../requests';
import { getLocationsId } from '../requests';

type UseGetLocationsIdQueryParams = QuerySettings<
  GetLocationsIdRequestConfig,
  typeof getLocationsId
>;

export const useGetLocationsIdQuery = ({ params, config, options }: UseGetLocationsIdQueryParams) =>
  useQuery({
    queryKey: ['getLocationsId', params.id],
    ...options,
    queryFn: () => getLocationsId({ params, config }),
  });
