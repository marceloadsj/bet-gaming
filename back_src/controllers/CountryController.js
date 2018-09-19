const axios = require("axios");
const ResponseService = require("../services/ResponseService");
const CONSTANTS = require("../configs/constants");

class CountryController {
  async getByName(request, response) {
    try {
      const axiosResponse = await axios.get(
        CONSTANTS.URL_WS_COUNTRY_BY_NAME.replace(":name", request.params.name)
      );
      response.json(axiosResponse.data);
    } catch (error) {
      ResponseService.sendError(response, error);
    }
  }

  async getAll(_, response) {
    try {
      const axiosResponse = await axios.get(CONSTANTS.URL_WS_COUNTRY_ALL);
      response.json(axiosResponse.data);
    } catch (error) {
      ResponseService.sendError(response, error);
    }
  }
}

module.exports = new CountryController();
