class AppError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        this.name = this.constructor.name;
    }
}

class InternalServerError extends AppError {
    constructor(message) {
        super(message, 500);
    }
}

class BadRequestError extends AppError {
    constructor(message) {
        super(message, 400);
    }
}

class NotFoundError extends AppError {
    constructor(message) {
        super(message, 404);
    }
}

class UnauthorizedError extends AppError {
    constructor(message) {
        super(message, 401);
    }
}

class ForbiddenError extends AppError {
    constructor(message) {
        super(message, 403);
    }
}

class ConflictError extends AppError {
    constructor(message) {
        super(message, 409);
    }
}

class NotImplementedError extends AppError {
    constructor(message) {
        super(message, 501);
    }
}

module.exports = {
    AppError,
    InternalServerError,
    BadRequestError,
    NotFoundError,
    UnauthorizedError,
    ForbiddenError,
    ConflictError,
    NotImplementedError,
};
