export declare abstract class ErrorHandler extends Error {
    protected uid: string;
    protected timestamp: Date;
    protected stackMsg: string[];
    protected code?: number;
    protected statusCode?: number;
    constructor(message: string);
    printError(): string;
    private getErrorStack;
}
