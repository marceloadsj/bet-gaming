const express = require("express");
const countryController = require("../controllers/CountryController");
const indexController = require("../controllers/IndexController");

module.exports = app => {
  app.get("/api/countries", countryController.getAllAndReturn);
  app.get("/api/countries/by-name/:name", countryController.getByName);
  app.get("/api/countries/by-names/:names", countryController.getByNames);
  app.get("/api/country/by-code/:code", countryController.getByCode);

  app.get("/api", indexController.apiIndex);
  app.get("/api/*", indexController.notFoundApi);

  // If running on production, then, the spa is served by us, not webpack dev server
  if (process.env.NODE_ENV === "production") {
    app.use(express.static("build"));
    app.get("*", indexController.index);
  }
};
