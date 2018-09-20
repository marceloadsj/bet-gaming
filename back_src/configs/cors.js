module.exports = app => {
  if (process.env.NODE_ENV === "development") {
    app.use((_, response, next) => {
      response.header("Access-Control-Allow-Origin", "*");

      next();
    });
  }
};
