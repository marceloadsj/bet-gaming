import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import userReducer from "./domains/user/reducer";
import countryReducer from "./domains/country/reducer";

/*

An example of hidrated state:

{
  user: {
    name: 'Marcelo Junior',
    country: 'Brazil'
  },

  country: {
    fetchingCountries: false,
    fetchCountriesError: null,
    list: {
      br: {
        id: 'br',
        name: 'Brazil'
      },
      mt: {
        id: 'mt',
        name: 'Malta'
      }
    }
  },

  router: ...
}

*/

export default combineReducers({
  user: userReducer,
  country: countryReducer,
  router: routerReducer
});
