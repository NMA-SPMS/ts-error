
import ApplicationError from '../../classes/app-error';
import { ErrorHandler } from '../../classes/error-handler';
import { ErrorCodes } from '../../common/enums/errors';
import { IError } from '../../interfaces/error-handling';

describe('App Error Class - Test', () => {
  it('Constructor test', () => {
    try {
      throw new ApplicationError('Error 1');
    } catch (err) {
      console.log(err);
      expect(err).toBeInstanceOf(Error);
      expect(err).toBeInstanceOf(ApplicationError);
      expect(err.name).toEqual(err.constructor.name);
      expect(err.message).toEqual('Error 1');
      expect(err.stackMsg).toBeDefined();
      expect(err.uid).toBeDefined();
      expect(err.timestamp).toBeInstanceOf(Date);
      expect(err.code).toEqual(ErrorCodes.App);
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
