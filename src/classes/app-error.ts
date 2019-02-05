import { ErrorCodes } from '../common/enums/errors';
import { ErrorHandler } from './error-handler';

export default class ApplicationError extends ErrorHandler {
  constructor(message: string) {
    super(message);
    this.code = ErrorCodes.App;
  }
}
