import { api } from '~/utils/api/instance';
import { SEARCH_PARAMS } from '~/utils/constants';
import { toURLSearchParams } from '~/utils/helpers';

export interface GetPaintingsParams {
  query?: string;
  page?: number;
  limit?: number;
  id?: number;
  authorId?: number;
  locationId?: number;
  yearsFrom?: number;
  yearsTo?: number;
}

export type GetPaintingsRequestConfig = Partial<RequestConfig<GetPaintingsParams>>;

export type GetPaintingsResponse = (Painting & { location: Location; author: Author })[];

export const GET_PAINTINGS_SEARCH_PARAMS = {
  ID: 'id',
  QUERY: 'q',
  PAGE: '_page',
  AUTHOR_ID: 'authorId',
  LOCATION_ID: 'locationId',
  LIMIT: '_limit',
  YEARS_FROM: 'created_gte',
  YEARS_TO: 'created_lte',
};

export const getPaintings = ({ params, config }: GetPaintingsRequestConfig = {}) => {
  const searchParams = toURLSearchParams({
    [GET_PAINTINGS_SEARCH_PARAMS.ID]: params?.id,
    [GET_PAINTINGS_SEARCH_PARAMS.QUERY]: params?.query,
    [GET_PAINTINGS_SEARCH_PARAMS.PAGE]: params?.page,
    [GET_PAINTINGS_SEARCH_PARAMS.AUTHOR_ID]: params?.authorId,
    [GET_PAINTINGS_SEARCH_PARAMS.LOCATION_ID]: params?.locationId,
    [GET_PAINTINGS_SEARCH_PARAMS.LIMIT]: params?.limit,
    [GET_PAINTINGS_SEARCH_PARAMS.YEARS_FROM]: params?.yearsFrom,
    [GET_PAINTINGS_SEARCH_PARAMS.YEARS_TO]: params?.yearsTo,
  });
  searchParams.append(SEARCH_PARAMS.EXPAND, 'location');
  searchParams.append(SEARCH_PARAMS.EXPAND, 'author');

  return api.get<GetPaintingsResponse>(`/paintings?${searchParams.toString()}`, config);
};
