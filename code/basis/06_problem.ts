function log(message: string, options: { logLevel: string }) {
    const { logLevel } = options;

    if (logLevel == "error") {
        console.error(message)
    }
    else if (logLevel == "warn") {
        console.warn(message)
    }
    else if (logLevel == "info") {
        console.log(message)
    }
}
