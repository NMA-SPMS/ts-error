"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const operational_error_1 = require("../../classes/operational-error");
describe('Operational Error Class - Test', () => {
    it('Constructor test', () => {
        try {
            throw new operational_error_1.default('Error 1', 400);
        }
        catch (err) {
            expect(err).toBeInstanceOf(Error);
            expect(err).toBeInstanceOf(operational_error_1.default);
            expect(err.name).toEqual(err.constructor.name);
            expect(err.message).toEqual('Error 1');
            expect(err.stackMsg).toBeDefined();
            expect(err.uid).toBeDefined();
            expect(err.timestamp).toBeInstanceOf(Date);
            expect(err.code).toEqual(700 /* Operational */);
            expect(err.statusCode).toEqual(400);
        }
    });
});
