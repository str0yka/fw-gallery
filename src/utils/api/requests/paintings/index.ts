import { api } from '~/utils/api/instance';
import { toURLSearchParams } from '~/utils/helpers';

export interface GetPaintingsParams {
  id?: number;
  query?: string;
  page?: number;
  authorId?: number;
  limit?: number;
}

export type GetPaintingsRequestConfig = Partial<RequestConfig<GetPaintingsParams>>;

export type GetPaintingsResponse = Painting[];

export const GET_PAINTINGS_SEARCH_PARAMS = {
  ID: 'id',
  QUERY: 'q',
  PAGE: '_page',
  AUTHOR_ID: 'authorId',
  LIMIT: '_limit',
};

export const getPaintings = ({ params, config }: GetPaintingsRequestConfig = {}) => {
  const searchParams = toURLSearchParams({
    [GET_PAINTINGS_SEARCH_PARAMS.ID]: params?.id,
    [GET_PAINTINGS_SEARCH_PARAMS.QUERY]: params?.query,
    [GET_PAINTINGS_SEARCH_PARAMS.PAGE]: params?.page,
    [GET_PAINTINGS_SEARCH_PARAMS.AUTHOR_ID]: params?.authorId,
    [GET_PAINTINGS_SEARCH_PARAMS.LIMIT]: params?.limit,
  });

  return api.get<GetPaintingsResponse>(`/paintings?${searchParams.toString()}`, config);
};
