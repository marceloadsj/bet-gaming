const path = require("path");
const ResponseService = require("../services/ResponseService");

class IndexController {
  apiIndex(_, response) {
    ResponseService.sendJson(response, {
      app: process.env.REACT_APP_NAME
    });
  }

  notFoundApi(_, response) {
    ResponseService.sendError(response, {
      status: 404,
      message: "Api not found"
    });
  }

  index(_, response) {
    response.sendFile(path.resolve("./build/index.html"));
  }
}

module.exports = new IndexController();
