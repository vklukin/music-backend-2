export interface DefaultErrorObject {
    message: string;
}

export interface ErrorWithOriginalError {
    message: string;
    originalError: Error;
}
