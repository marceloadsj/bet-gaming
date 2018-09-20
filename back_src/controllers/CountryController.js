const axios = require("axios");
const ResponseService = require("../services/ResponseService");
const CountryService = require("../services/CountryService");
const CONSTANTS = require("../configs/constants");

class CountryController {
  async getByName(request, response) {
    try {
      const axiosResponse = await axios.get(
        CONSTANTS.URL_WS_COUNTRY_BY_NAME.replace(":name", request.params.name)
      );
      ResponseService.sendJson(response, axiosResponse.data);
    } catch (error) {
      ResponseService.sendError(response, error);
    }
  }

  async getByNames(request, response) {
    try {
      const axiosResponse = await CountryService.getAll();

      const names = request.params.names
        .toLowerCase()
        .split(";")
        .map(name => name.trim())
        .filter(name => name);

      const data = axiosResponse.data.filter(country => {
        return names.some(name => country.name.toLowerCase().includes(name));
      });

      ResponseService.sendJson(response, data);
    } catch (error) {
      ResponseService.sendError(response, error);
    }
  }

  async getByCode(request, response) {
    try {
      const axiosResponse = await axios.get(
        CONSTANTS.URL_WS_COUNTRY_BY_CODE.replace(":code", request.params.code)
      );
      ResponseService.sendJson(response, axiosResponse.data);
    } catch (error) {
      ResponseService.sendError(response, error);
    }
  }

  async getAllAndReturn(_, response) {
    try {
      const axiosResponse = await CountryService.getAll();
      ResponseService.sendJson(response, axiosResponse.data);
    } catch (error) {
      ResponseService.sendError(response, error);
    }
  }
}

module.exports = new CountryController();
