import { URL_COUNTRY_BY_NAME, URL_COUNTRY_BY_NAMES } from "configs/constants";

export const COUNTRY_FETCH_COUNTRY_BY_NAME = "COUNTRY_FETCH_COUNTRY_BY_NAME";

export function fetchCountryByName(name) {
  let url;
  if (name.includes(";")) {
    url = URL_COUNTRY_BY_NAMES.replace(":names", name);
  } else {
    url = URL_COUNTRY_BY_NAME.replace(":name", name);
  }

  return dispatch => {
    return new Promise((resolve, reject) => {
      dispatch({
        type: COUNTRY_FETCH_COUNTRY_BY_NAME,
        fetchMiddleware: true,
        url,
        resolve,
        reject
      });
    });
  };
}

export default (state, action) => {
  switch (action.type) {
    case COUNTRY_FETCH_COUNTRY_BY_NAME:
      return {
        ...state,
        fetchingCountryByName: true,
        fetchCountryByNameError: null
      };

    case COUNTRY_FETCH_COUNTRY_BY_NAME + "_SUCCESS":
      return {
        ...state,
        fetchingCountryByName: false,
        fetchCountryByNameError: null,
        list: {
          ...state.list,
          ...action.data.reduce((countries, country) => {
            countries[country.alpha3Code] = country;
            return countries;
          }, {})
        }
      };

    case COUNTRY_FETCH_COUNTRY_BY_NAME + "_FAILURE":
      return {
        ...state,
        fetchingCountryByName: false,
        fetchCountryByNameError: action.data
      };

    default:
      return state;
  }
};
