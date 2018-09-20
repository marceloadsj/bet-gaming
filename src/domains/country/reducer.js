import fetchCountryByName from "./actions/fetchCountryByName";
import fetchCountryByCode from "./actions/fetchCountryByCode";
import fetchCountries from "./actions/fetchCountries";

const reducers = [fetchCountryByName, fetchCountryByCode, fetchCountries];

const initialState = {
  fetchingCountryByName: false,
  fetchCountryByName: null,
  fetchingCountryByCode: false,
  fetchCountryByCodeError: null,
  fetchingCountries: false,
  fetchCountriesError: null,
  list: {}
};

export default (state = initialState, action) => {
  return reducers.reduce(
    (newState, reducer) => reducer(newState, action),
    state
  );
};
