import ApplicationError from '../../src/classes/app-error';
import { ErrorCodes } from '../../src/common/enums/errors';

describe('App Error Class - Test', () => {
  it('Constructor test', () => {
    try {
      throw new ApplicationError('Error 1');
    } catch (err) {
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
