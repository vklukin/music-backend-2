import { DefaultErrorObject, ErrorWithOriginalError } from "../types/errors";

export class Errors {
    constructor() {}

    static defaultError({ message }: DefaultErrorObject) {
        const result: DefaultErrorObject = {
            message
        };

        return result;
    }

    static ErrorWithOriginalError({ message, originalError }: ErrorWithOriginalError) {
        const result: ErrorWithOriginalError = {
            message,
            originalError
        };

        return result;
    }
}
