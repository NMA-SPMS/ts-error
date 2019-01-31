import { v4 } from 'uuid';

export abstract class ErrorHandler extends Error {

  protected uid: string;
  protected timestamp: Date;
  protected stackMsg: string[];
  protected code?: number;
  protected statusCode?: number;

  public constructor(message: string) {
    super(message);
    this.name = this.constructor.name;
    this.message = message;
    Error.captureStackTrace(this, this.constructor);
    this.uid = v4();
    this.timestamp = new Date();
    this.stackMsg = this.getErrorStack(this.stack);
  }

  public printError(): string {
    return JSON.stringify({
      uid: this.uid,
      timestamp: this.timestamp,
      name: this.name,
      message: this.message,
      stack: this.stackMsg,
      code: this.code,
      statusCode: this.statusCode
    });
  }

  private getErrorStack(stack: string | undefined): string[] {
    if (stack) {
      const filteredErrors = stack.split(/\r?\n/).slice(0, 3);
      const result = filteredErrors.map((str: string) => str.trim());
      return result;
    } else {
      return [];
    }
  }
}
