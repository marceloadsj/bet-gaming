const domain = "https://restcountries.eu/rest/v2";
const fields = "?fields=name;flag;alpha3Code;";

module.exports = {
  URL_WS_COUNTRY_ALL: `${domain}/all${fields}`,
  URL_WS_COUNTRY_BY_NAME: `${domain}/name/:name${fields}`
};
