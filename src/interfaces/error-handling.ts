export interface IError {
  uid: string;
  timestamp: Date;
  code?: number;
  name: string;
  statusCode?: number;
  message: string;
  stack: string[];
}
