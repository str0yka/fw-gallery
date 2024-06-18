import { useQuery } from '@tanstack/react-query';

import type { GetPaintingsRequestConfig } from '../requests';
import { getPaintings } from '../requests';

type UseGetPaintingsQueryParams = QuerySettings<GetPaintingsRequestConfig, typeof getPaintings>;

export const useGetPaintingsQuery = ({
  params,
  config,
  options,
}: UseGetPaintingsQueryParams = {}) =>
  useQuery({
    queryKey: ['getPaintings'],
    ...options,
    queryFn: () => getPaintings({ params, config }),
  });
