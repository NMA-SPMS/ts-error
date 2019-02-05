import { ErrorCodes } from '../common/enums/errors';
import { ErrorHandler } from './error-handler';

export default class OperationalError extends ErrorHandler {

  constructor(message: string, opCode?: number) {
    super(message);
    this.code = ErrorCodes.Operational;
    if (opCode) {
      console.log('has code');
      this.statusCode = opCode;
    } else {
      console.log('no code');
    }
  }
}
