"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class ErrorHandler extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
        this.message = message;
        Error.captureStackTrace(this, this.constructor);
        this.uid = uuid_1.v4();
        this.timestamp = new Date();
        this.stackMsg = this.getErrorStack(this.stack);
    }
    printError() {
        return JSON.stringify({
            uid: this.uid,
            timestamp: this.timestamp,
            name: this.name,
            message: this.message,
            stack: this.stackMsg,
            code: this.code,
            statusCode: this.statusCode
        });
    }
    getErrorStack(stack) {
        if (stack) {
            const filteredErrors = stack.split(/\r?\n/).slice(0, 3);
            const result = filteredErrors.map((str) => str.trim());
            return result;
        }
        else {
            return [];
        }
    }
}
exports.ErrorHandler = ErrorHandler;
