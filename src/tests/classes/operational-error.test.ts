
import OperationalError from '../../classes/operational-error';
import { ErrorCodes } from '../../common/enums/errors';

describe('Operational Error Class - Test', () => {
  it('Constructor test', () => {
    try {
      throw new OperationalError('Error 1', 400);
    } catch (err) {
      expect(err).toBeInstanceOf(Error);
      expect(err).toBeInstanceOf(OperationalError);
      expect(err.name).toEqual(err.constructor.name);
      expect(err.message).toEqual('Error 1');
      expect(err.stackMsg).toBeDefined();
      expect(err.uid).toBeDefined();
      expect(err.timestamp).toBeInstanceOf(Date);
      expect(err.code).toEqual(ErrorCodes.Operational);
      expect(err.statusCode).toEqual(400);
    }
  });
});
