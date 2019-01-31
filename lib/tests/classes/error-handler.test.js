"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_error_1 = require("../../classes/app-error");
const error_handler_1 = require("../../classes/error-handler");
describe('Print Error - Test', () => {
    it('PrintError test', () => {
        const d = new Date();
        const appError = {
            uid: 'A0',
            timestamp: d,
            name: 'ApplicationError',
            message: 'Error 1',
            stack: [],
            code: 600
        };
        try {
            error_handler_1.ErrorHandler.prototype.printError = jest.fn().mockImplementationOnce(() => {
                return JSON.stringify(appError);
            });
            const errorClass = new app_error_1.default('Error 1');
            throw errorClass;
        }
        catch (err) {
            // console.log(err);
            const jsonStr = err.printError();
            console.log(jsonStr);
            expect(jsonStr).toBeDefined();
            expect(jsonStr).toEqual(JSON.stringify(appError));
        }
    });
});
