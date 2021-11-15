import { IWeatherLocationDay } from 'types/WeatherLocationDayType';
import actionTypes from './actionTypes';
import { Actions } from './actions';

export const initialState = {

};

const reducer = (state: IWeatherLocationDay, action: Actions) => {
  const { type, response } = action;
  const cloneData = JSON.parse(JSON.stringify({ ...response }));

  switch (type) {
    case actionTypes.FETCH:

      return cloneData;
    default:
      throw new Error();
  }
};
export default reducer;
