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
    queryKey: [
      'getPaintings',
      params?.authorId,
      params?.id,
      params?.limit,
      params?.locationId,
      params?.page,
      params?.query,
      params?.yearsFrom,
      params?.yearsTo,
    ],
    ...options,
    queryFn: () => getPaintings({ params, config }),
  });
