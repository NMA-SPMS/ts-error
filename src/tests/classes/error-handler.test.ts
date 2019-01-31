import ApplicationError from '../../classes/app-error';
import { ErrorHandler } from '../../classes/error-handler';
import { IError } from '../../interfaces/error-handling';

describe('Print Error - Test', () => {
  it('PrintError test', () => {
    const d = new Date();
    const appError: IError = {
      uid: 'A0',
      timestamp: d,
      name: 'ApplicationError',
      message: 'Error 1',
      stack: [],
      code: 600
    };
    try {
      ErrorHandler.prototype.printError = jest.fn().mockImplementationOnce(() => {
        return JSON.stringify(appError);
      });
      const errorClass = new ApplicationError('Error 1');
      throw errorClass;
    } catch (err) {
      // console.log(err);
      const jsonStr = err.printError();
      console.log(jsonStr);
      expect(jsonStr).toBeDefined();
      expect(jsonStr).toEqual(JSON.stringify(appError));
    }
  });
});
