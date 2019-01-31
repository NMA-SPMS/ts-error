"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const error_handler_1 = require("./error-handler");
class ApplicationError extends error_handler_1.ErrorHandler {
    constructor(message) {
        super(message);
        this.code = 600 /* App */;
    }
}
exports.default = ApplicationError;
