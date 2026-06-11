// Enums definieren ein Set von Konstanten 
enum LogLevel {
    Error = 'error',
    Warn = 'warn',
    Info = 'info'
}

const logFns = {
    [LogLevel.Error]: console.error,
    [LogLevel.Warn]: console.warn,
    [LogLevel.Info]: console.info,
}

function log(message: string, options: { logLevel: LogLevel }) {
    logFns[options.logLevel]()
}

log("hi", { logLevel: LogLevel.Info })


export enum HttpStatus {
    OK = 200,
    CREATED = 201,
    NO_CONTENT = 204,

    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
}