import { v4 } from 'uuid';
import { IError } from '../interfaces/error-handling';

export abstract class ErrorHandler extends Error {
  protected uid: string;
  protected timestamp: Date;
  protected stackMsg: string[];
  protected code?: number;
  protected statusCode?: number;

  public constructor(message: string) {
    super(message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
    this.uid = v4();
    this.timestamp = new Date();
    this.stackMsg = this.getErrorStack();
  }

  public toString(): string {
    return JSON.stringify({
      uid: this.uid,
      timestamp: this.timestamp,
      name: this.name,
      message: this.message,
      stack: this.stackMsg,
      code: this.code,
      statusCode: this.statusCode,
    } as IError);
  }

  private getErrorStack(): string[] {
    if (this.stack) {
      const filteredErrors = this.stack.split(/\r?\n/).slice(1, 4);
      const result = filteredErrors.map((str: string) => str.trim());
      return result;
    } else {
      return [];
    }
  }
}
