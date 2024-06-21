import { useQuery } from '@tanstack/react-query';

import type { GetLocationsRequestConfig } from '../requests';
import { getLocations } from '../requests';

type UseGetLocationsQueryParams = QuerySettings<GetLocationsRequestConfig, typeof getLocations>;

export const useGetLocationsQuery = ({ config, options }: UseGetLocationsQueryParams = {}) =>
  useQuery({
    queryKey: ['getLocations'],
    ...options,
    queryFn: () => getLocations({ config }),
  });
