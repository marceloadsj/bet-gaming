require("dotenv-flow").config();

const express = require("express");
const cors = require("./back_src/configs/cors");
const routes = require("./back_src/configs/routes");

const app = express();

cors(app);
routes(app);

const port = process.env.BACKEND_PORT;
app.listen(port, () => console.log(`Server is listening on port ${port}!`));
