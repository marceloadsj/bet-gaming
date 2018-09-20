const domain = "https://restcountries.eu/rest/v2";

const simpleFields = "?fields=name;flag;alpha3Code;region;subregion;";
const detailedFields = `${simpleFields}topLevelDomain;population;currencies;languages;capital;`;

module.exports = {
  URL_WS_COUNTRY_BY_NAME: `${domain}/name/:name${simpleFields}`,
  URL_WS_COUNTRY_BY_CODE: `${domain}/alpha/:code${detailedFields}`,
  URL_WS_COUNTRIES: `${domain}/all${simpleFields}`
};
