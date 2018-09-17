const path = require("path");

class IndexController {
  index(_, response) {
    response.sendFile(path.resolve("./build/index.html"));
  }
}

module.exports = new IndexController();
