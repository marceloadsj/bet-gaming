import fetchCountries from "./actions/fetchCountries";
import fetchCountryByName from "./actions/fetchCountryByName";

const reducers = [fetchCountries, fetchCountryByName];

const initialState = {
  fetchingCountries: false,
  fetchCountriesError: null,
  fetchingCountryByName: false,
  fetchCountryByName: null,
  list: {}
};

export default (state = initialState, action) => {
  return reducers.reduce(
    (newState, reducer) => reducer(newState, action),
    state
  );
};
