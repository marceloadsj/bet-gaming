const axios = require("axios");
const URL_WS_ALL_COUNTRIES = require("../configs/constants")
  .URL_WS_ALL_COUNTRIES;

class CountryController {
  async list(_, response) {
    try {
      const axiosResponse = await axios.get(URL_WS_ALL_COUNTRIES);
      response.json(axiosResponse.data);
    } catch (error) {
      response.status(500).json(error);
    }
  }
}

module.exports = new CountryController();
