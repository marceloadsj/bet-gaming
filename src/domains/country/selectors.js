import { createSelector } from "reselect";

export const countriesOptions = createSelector(
  countries => countries,
  countries =>
    Object.values(countries).map(country => {
      return {
        icon: country.flag,
        value: country.alpha3Code,
        label: country.name
      };
    })
);
