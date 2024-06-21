import { api } from '~/utils/api/instance';

export type GetLocationsRequestConfig = RequestConfig;

export type GetLocationsResponse = Location[];

export const getLocations = ({ config }: GetLocationsRequestConfig) =>
  api.get<GetLocationsResponse>('/locations', config);
