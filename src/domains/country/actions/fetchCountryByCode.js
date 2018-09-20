import { URL_COUNTRY_BY_CODE } from "configs/constants";

export const COUNTRY_FETCH_COUNTRY_BY_CODE = "COUNTRY_FETCH_COUNTRY_BY_CODE";

export function fetchCountryByCode(code) {
  return dispatch => {
    return new Promise((resolve, reject) => {
      dispatch({
        type: COUNTRY_FETCH_COUNTRY_BY_CODE,
        fetchMiddleware: true,
        url: URL_COUNTRY_BY_CODE.replace(":code", code),
        resolve,
        reject
      });
    });
  };
}

export default (state, action) => {
  switch (action.type) {
    case COUNTRY_FETCH_COUNTRY_BY_CODE:
      return {
        ...state,
        fetchingCountryByCode: true,
        fetchCountryByCodeError: null
      };

    case COUNTRY_FETCH_COUNTRY_BY_CODE + "_SUCCESS":
      return {
        ...state,
        fetchingCountryByCode: false,
        fetchCountryByCodeError: null,
        list: {
          ...state.list,
          [action.data.alpha3Code]: {
            ...action.data,
            completed: true
          }
        }
      };

    case COUNTRY_FETCH_COUNTRY_BY_CODE + "_FAILURE":
      return {
        ...state,
        fetchingCountryByCode: false,
        fetchCountryByCodeError: action.data
      };

    default:
      return state;
  }
};
