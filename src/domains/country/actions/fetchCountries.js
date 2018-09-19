import { URL_COUNTRIES } from "configs/constants";

export const COUNTRY_FETCH_COUNTRIES = "COUNTRY_FETCH_COUNTRIES";

export function fetchCountries() {
  return dispatch => {
    return new Promise((resolve, reject) => {
      dispatch({
        type: COUNTRY_FETCH_COUNTRIES,
        fetchMiddleware: true,
        url: URL_COUNTRIES,
        resolve,
        reject
      });
    });
  };
}

export default (state, action) => {
  switch (action.type) {
    case COUNTRY_FETCH_COUNTRIES:
      return {
        ...state,
        fetchingCountries: true,
        fetchCountriesError: null
      };

    case COUNTRY_FETCH_COUNTRIES + "_SUCCESS":
      return {
        ...state,
        fetchingCountries: false,
        fetchCountriesError: null,
        list: action.data.reduce((countries, country) => {
          countries[country.alpha3Code] = country;
          return countries;
        }, {})
      };

    case COUNTRY_FETCH_COUNTRIES + "_FAILURE":
      return {
        ...state,
        fetchingCountries: false,
        fetchCountriesError: action.data
      };

    default:
      return state;
  }
};
