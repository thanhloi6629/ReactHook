import { ISearchLocation } from 'types/SearchLocationType';
import { IWeatherLocationDay } from 'types/WeatherLocationDayType';
import ApiClient from './ApiClient';

export const getLocationSearch = async (
  queryLocation:string,
): Promise<Array<ISearchLocation>> => {
  const query = {};
  const params = {
    queryLocation,
  };
  const response = await ApiClient.get('/api/location/search/', params, query);
  return response.data;
};

export const getMetaWeatherLocationDay = async (
  locationId: string,
): Promise<IWeatherLocationDay> => {
  const params = {
  };
  const response = await ApiClient.get(`/api/location/${locationId}/`, params);
  return response.data;
};
