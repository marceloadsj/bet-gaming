module.exports = app => {
  if (process.env.NODE_ENV === "development") {
    app.use((_, response, next) => {
      response.header("Access-Control-Allow-Origin", "*");
      response.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      );

      next();
    });
  }
};
