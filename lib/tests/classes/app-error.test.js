"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_error_1 = require("../../classes/app-error");
describe('App Error Class - Test', () => {
    it('Constructor test', () => {
        try {
            throw new app_error_1.default('Error 1');
        }
        catch (err) {
            expect(err).toBeInstanceOf(Error);
            expect(err).toBeInstanceOf(app_error_1.default);
            expect(err.name).toEqual(err.constructor.name);
            expect(err.message).toEqual('Error 1');
            expect(err.stackMsg).toBeDefined();
            expect(err.uid).toBeDefined();
            expect(err.timestamp).toBeInstanceOf(Date);
            expect(err.code).toEqual(600 /* App */);
        }
    });
});
/*   it('Undefined stack test', () => {
    try {
      Error.captureStackTrace
      Error.prototype.stack = jest.fn().mockReturnValueOnce(undefined);
      console.log(new AppError('').stack);
      const app = new AppError('Error 1');
      console.log(app.stack);
    } catch (err) {
      // console.log(err.stack);
      console.log(err);
      // expect(jsonStr).toBeDefined(s);
      // expect(jsonStr).toEqual(JSON.stringify(appError));
    } */
