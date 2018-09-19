const dotenvFlow = require("dotenv-flow");
const express = require("express");

dotenvFlow.config();

const app = express();

// Here we configure cors, enabling * in development
const cors = require("./back_src/configs/cors");
cors(app);

// If running on production, then, the spa is served by us
if (process.env.NODE_ENV === "production") {
  app.use(express.static("build"));

  app.get("*", require("./back_src/controllers/IndexController").index);
}

const port = process.env.BACKEND_PORT;
app.listen(port, () => console.log(`Server is listening on port ${port}!`));
