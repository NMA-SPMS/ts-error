"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const error_handler_1 = require("./error-handler");
class OperationalError extends error_handler_1.ErrorHandler {
    constructor(message, opCode) {
        super(message);
        this.code = 700 /* Operational */;
        this.statusCode = opCode;
    }
}
exports.default = OperationalError;
