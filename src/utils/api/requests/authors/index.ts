import { api } from '~/utils/api/instance';

export type GetAuthorsRequestConfig = RequestConfig;

export type GetAuthorsResponse = Author[];

export const getAuthors = ({ config }: GetAuthorsRequestConfig) =>
  api.get<GetAuthorsResponse>('/authors', config);
