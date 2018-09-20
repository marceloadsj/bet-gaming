class ResponseService {
  static sendJson(response, object) {
    response.status(200).json(object);
  }

  static sendError(response, error) {
    const status =
      (error.response ? error.response.status : null) || error.status || 500;

    response.status(status).json({
      error: {
        message: error.message
      }
    });
  }
}

module.exports = ResponseService;
