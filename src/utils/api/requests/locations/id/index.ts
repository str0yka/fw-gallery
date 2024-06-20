import { api } from '~/utils/api/instance';

export interface GetLocationsIdParams {
  id: number;
}

export type GetLocationsIdRequestConfig = RequestConfig<GetLocationsIdParams>;

export type GetLocationsIdResponse = Location;

export const getLocationsId = ({ params, config }: GetLocationsIdRequestConfig) =>
  api.get<GetLocationsIdResponse>(`/locations/${params.id}`, config);
