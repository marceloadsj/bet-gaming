class ResponseService {
  static sendError(response, error) {
    const status = (error.response ? error.response.status : null) || 500;

    response.status(status).json({
      error: {
        message: error.message
      }
    });
  }
}

module.exports = ResponseService;
