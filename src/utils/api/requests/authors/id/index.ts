import { api } from '~/utils/api/instance';

export interface GetAuthorsIdParams {
  id: number;
}

export type GetAuthorsIdRequestConfig = RequestConfig<GetAuthorsIdParams>;

export type GetAuthorsIdResponse = Author;

export const getAuthorsId = ({ params, config }: GetAuthorsIdRequestConfig) =>
  api.get<GetAuthorsIdResponse>(`/authors/${params.id}`, config);
