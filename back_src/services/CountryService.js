const axios = require("axios");
const CONSTANTS = require("../configs/constants");

class CountryService {
  static async getAll() {
    return await axios.get(CONSTANTS.URL_WS_COUNTRIES);
  }
}

module.exports = CountryService;
