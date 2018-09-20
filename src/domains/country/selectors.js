import { createSelector } from "reselect";

export const countriesArray = createSelector(
  countries => countries,
  countries => Object.values(countries)
);

export const countriesOptions = createSelector(
  countries => countriesArray(countries),
  countries =>
    countries.map(country => {
      return {
        icon: country.flag,
        value: country.alpha3Code,
        label: country.name
      };
    })
);
