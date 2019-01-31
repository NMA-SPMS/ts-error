import { ErrorHandler } from './error-handler';
export default class OperationalError extends ErrorHandler {
    constructor(message: string, opCode: number);
}
