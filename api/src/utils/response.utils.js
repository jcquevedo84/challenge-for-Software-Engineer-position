class Success {
  constructor(message) {
      this.code = 200;
      this.message=message;
  }

  get() {
      return {
          message: this.message
      }
  }
}

class ApiError extends Error {
  constructor(message) {
      super(message);

      this.errorMessage = message;
      Error.captureStackTrace(this, this.constructor);
  }

  get() {
      return {
          message: this.errorMessage
      }
  }
}

class PartialError extends ApiError {
  constructor(message) {
      super(message);
      this.code = 207;
  }
}

class BadRequestError extends ApiError {
  constructor(message) {
      super(message);
      this.code = 400;
  }
}

class NotFoundError extends ApiError {
  constructor(message) {
      super(message);
      this.code = 404;
  }
}

class ConflictError extends ApiError {
  constructor(message) {
      super(message);
      this.code = 409;
  }
}

class NotMatchError extends ApiError {
  constructor(message) {
      super(message);
      this.code = 422;
  }
}

class InternalServerError extends ApiError {
  constructor(message) {
      super(message);
      this.code = 500;
  }
}

module.exports = { 
  Success,    
  PartialError,
  BadRequestError,
  NotFoundError,
  ConflictError,
  NotMatchError,
  InternalServerError }
